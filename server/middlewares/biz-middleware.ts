import { getRepository, In } from 'typeorm'
import { Bizplace, BizplaceUser, Partner } from '../entities'

/**
 * @description 요청을 보낸 사용자와 접속한 도메인과의 관계를 판단하여
 * 접속한 도메인을 통해 접근 할 수 있는 대상 bizplaces를 판단하고
 * 대상 bizplaces를 context에 할당함
 *
 * @param context
 * @param next
 */
export async function bizMiddleware(context: any, next: any): Promise<void> {
  if (
    context &&
    context.state &&
    context.state.user &&
    context.state.user.id &&
    context.state.domain &&
    context.state.domain.id
  ) {
    // 1. 현재 접속한 도메인의 bizplace를 조회
    const accessBizplace: Bizplace = await getRepository(Bizplace).findOne({ where: { domain: context.state.domain } })
    // 2. 현재 접속한 도메인의 bizplace와 user를 조건으로 현재 user가 해당 bizplace의 사용자인지를 판단함
    // 도메인에 소속된 사용자라면 bizplaces_users 테이블에 데이터가 존재하지 않음
    // 도메인에 소속되지 않은 사용자라면 bizplaces_users 테이블에 데이터가 존재함
    const bizplaceUser: BizplaceUser[] = await getRepository(BizplaceUser).find({
      where: { bizplace: accessBizplace, user: context.state.user }
    })

    let bizplaces: Bizplace[]
    if (!bizplaceUser || !bizplaceUser.length) {
      // 3. 도메인에 소속된 사용자
      // 도메인에 소속된 사용자는 도메인의 bizplace와 관계를 갖고 있는 모든 bizplaces와 자신의 bizplace를 context.state.bizplaces에 할당함
      const partners: Partner[] = await getRepository(Partner).find({
        where: { domainBizplace: accessBizplace },
        relations: ['partnerBizplace']
      })

      bizplaces = [accessBizplace, ...partners.map((partner: Partner) => partner.partnerBizplace)]
    } else {
      // 4. 도메인에 소속되지 않은 사용자
      // 도메인에 소속되지 않은 사용자는 도메인의 bizplace와 관계를 갖고 있는 모든 bizplace 중 사용자가 접근 가능한 bizplace를 context.state.bizplaces에 할당함
      const usersBizplaces: BizplaceUser[] = await getRepository(BizplaceUser).find({
        where: { user: context.state.user },
        relations: ['bizplace']
      })
      const partners: Partner[] = await getRepository(Partner).find({
        where: {
          domainBizplace: accessBizplace,
          partnerBizplace: In(usersBizplaces.map((userBizplace: BizplaceUser) => userBizplace.bizplace.id))
        },
        relations: ['partnerBizplace']
      })

      bizplaces = partners.map((partner: Partner) => partner.partnerBizplace)
    }

    context.state.bizplaces = bizplaces
  }

  return next()
}
