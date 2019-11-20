import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { getRepository, In, Repository } from 'typeorm'
import { Bizplace, BizplaceUser, Partner } from '../entities'
import { checkUserBelongsDomain } from '../utils/check-user-belongs-domain'

/**
 * @description 요청을 보낸 사용자와 접속한 도메인과의 관계를 판단하여
 * 접속한 도메인을 통해 접근 할 수 있는 대상 bizplaces를 판단하고
 * 대상 bizplaces를 context에 할당함
 *
 * @param context
 * @param next
 */
export async function bizMiddleware(context: any, next: any): Promise<void> {
  const domain: Domain = (context && context.state && context.state.domain) || null
  const user: User = (context && context.state && context.state.user) || null
  if (!domain || !user) return next()

  const bizRepo: Repository<Bizplace> = getRepository(Bizplace)
  const partnerRepo: Repository<Partner> = getRepository(Partner)
  const bizUserRepo: Repository<BizplaceUser> = getRepository(BizplaceUser)
  const accessingBizplace: Bizplace = await bizRepo.findOne({ where: { domain: context.state.domain } })
  const partners: Partner[] = await partnerRepo.find({
    where: { domainBizplace: accessingBizplace },
    relations: ['partnerBizplace']
  })

  let bizplaces: Bizplace[]

  // 현재 로그인한 사용자가 현재 접속한 도메인에 소속된 사용자 => 관리자의 입장으로 접속
  // 현재 도메인과 partnership의 관계에 있는 모든 bizplace와 자신의 bizplace를 context.state.bizplaces에 할당함
  if (checkUserBelongsDomain(context.state.domain, context.state.user)) {
    bizplaces = [accessingBizplace, ...partners.map((partner: Partner) => partner.partnerBizplace)]
  }

  // 현재 로그인한 사용자가 현재 접속한 도메인에 소속되어 있지 않은 사용자 => 파트너의 입장으로 접속
  // 현재 도메인과 partnership의 관계에 있는 모든 bizplace 중 자신이 열람 가능한 bizplace 리스트를 찾아 context.state.bizplaces에 할당함
  else {
    const userBizplaces: BizplaceUser[] = await bizUserRepo.find({
      where: {
        user,
        bizplace: In(partners.map((partner: Partner) => partner.partnerBizplace.id))
      }
    })

    bizplaces = userBizplaces.map((userBizplace: BizplaceUser) => userBizplace.bizplace)
  }

  context.state.bizplaces = bizplaces
  return next()
}
