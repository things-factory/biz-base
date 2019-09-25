import { User } from '@things-factory/auth-base'
import { getRepository } from 'typeorm'
import { Bizplace, BizplaceUser } from '../../../entities'

export const userBizplacesResolver = {
  async userBizplaces(_: any, { email }, context: any) {
    const user: User = await getRepository(User).findOne({ domain: context.state.domain, email })
    const bizplaces = await getRepository(Bizplace).find({ domain: context.state.domain })
    const userBizplaces = await getRepository(BizplaceUser).find({ where: { user }, relations: ['bizplace'] })
    return bizplaces.map((bizplace: Bizplace) => {
      return {
        id: bizplace.id,
        name: bizplace.name,
        description: bizplace.description,
        assigned:
          userBizplaces.filter((bizplaceUser: BizplaceUser) => bizplaceUser.bizplace.id === bizplace.id).length > 0,
        mainBizplace:
          userBizplaces.filter(
            (bizplaceUser: BizplaceUser) => bizplaceUser.bizplace.id === bizplace.id && bizplaceUser.mainBizplace
          ).length > 0
      }
    })
  }
}
