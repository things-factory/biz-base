import { User } from '@things-factory/auth-base'
import { getManager, getRepository } from 'typeorm'
import { Bizplace, BizplaceUser } from '../../../entities'

export const updateUserBizplaces = {
  async updateUserBizplaces(_: any, { email, bizplaceUsers }, context: any) {
    return await getManager().transaction(async () => {
      try {
        const user: User = await getRepository(User).findOne({ where: { domain: context.state.domain, email } })
        if (!user) throw new Error('user not exists')

        // 1. Delete every bizplaces related with current user.
        await getRepository(BizplaceUser).delete({ user })

        // 2. Append new user into bizplace.
        bizplaceUsers.forEach(async (bizplaceUser: BizplaceUser) => {
          await getRepository(BizplaceUser).insert({
            bizplace: await getRepository(Bizplace).findOne(bizplaceUser.bizplace.id),
            user
          })
        })

        const bizplaces = await getRepository(Bizplace).find({ domain: context.state.domain })
        const userBizplaces = await getRepository(BizplaceUser).find({ where: { user }, relations: ['bizplace'] })
        return bizplaces.map((bizplace: Bizplace) => {
          return {
            id: bizplace.id,
            name: bizplace.name,
            description: bizplace.description,
            assigned:
              userBizplaces.filter((bizplaceUser: BizplaceUser) => bizplaceUser.bizplace.id === bizplace.id).length > 0
          }
        })
      } catch (e) {
        throw e
      }
    })
  }
}
