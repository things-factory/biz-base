import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { getRepository, In, Repository } from 'typeorm'
import { Bizplace, BizplaceUser, Partner } from '../entities'
import { checkUserBelongsDomain } from './check-user-belongs-domain'

/**
 * @description 도메인과 사용자의 관계를 판단하여
 * 접속한 도메인을 통해 접근 할 수 있는 대상 bizplaces를 찾아 return
 *
 * @param domain
 * @param user
 */
export async function getPermittedBizplaces(domain: Domain, user: User): Promise<Bizplace[]> {
  const bizRepo: Repository<Bizplace> = getRepository(Bizplace)
  const partnerRepo: Repository<Partner> = getRepository(Partner)
  const bizUserRepo: Repository<BizplaceUser> = getRepository(BizplaceUser)

  const domainBizplace: Bizplace = await bizRepo.findOne({ where: { domain } })
  const partners: Partner[] = await partnerRepo.find({
    where: { domainBizplace },
    relations: ['partnerBizplace']
  })

  let bizplaces: Bizplace[]

  // 전달 받은 user가 현재 전달 받은 domain에 소속된 사용자 => 도메인의 관리자
  // 도메인과 partnership의 관계에 있는 모든 bizplace와 자신 도메인의 bizplace를 return
  if (await checkUserBelongsDomain(domain, user)) {
    bizplaces = [domainBizplace, ...partners.map((partner: Partner) => partner.partnerBizplace)]
  }

  // 전달 받은 user가 현재 전달 받은 domain에 소속되지 않은 사용자 => 도메인과 파트너의 관계
  // 도메인과 partnership의 관계에 있는 모든 bizplace 중 user가 열람 가능한 bizplace 리스트를 찾아 return
  else {
    const bizplaceUser: BizplaceUser = await bizUserRepo.findOne({
      where: {
        user,
        bizplace: In(partners.map((partner: Partner) => partner.partnerBizplace.id))
      },
      relations: ['bizplace']
    })

    bizplaces = bizplaceUser && bizplaceUser.bizplace ? [bizplaceUser.bizplace] : [null]
  }

  return bizplaces
}

export async function getPermittedBizplaceIds(domain: Domain, user: User): Promise<string[] | any[]> {
  const bizplaces: Bizplace[] = await getPermittedBizplaces(domain, user)
  return bizplaces.map((bizplace: Bizplace) => bizplace.id || null)
}

export async function getMyBizplace(user: User): Promise<Bizplace> {
  const bizplaceUser: BizplaceUser = await getRepository(BizplaceUser).findOne({
    where: { user },
    relations: ['bizplace']
  })
  return bizplaceUser.bizplace
}
