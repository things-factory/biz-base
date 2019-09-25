import { User } from '@things-factory/auth-base'
import { getManager, getRepository } from 'typeorm'
import { Bizplace, BizplaceUser } from '../../../entities'

export const updateUserBizplaces = {
  async updateUserBizplaces(_: any, { email, bizplaceUsers }, context: any) {
    return await getManager().transaction(async () => {
      try {
        const targetUser: User = await getRepository(User).findOne({ where: { domain: context.state.domain, email } })
        if (!targetUser) throw new Error('user not exists')

        // 1. Delete every bizplaces related with current user.
        await getRepository(BizplaceUser).query(`
          DELETE FROM
            bizplaces_users
          WHERE
            user_id = '${targetUser.id}'
        `)

        // 2. Append new user into bizplace.
        bizplaceUsers.forEach(async (bizplaceUser: BizplaceUser) => {
          await getRepository(BizplaceUser).insert({
            bizplace: bizplaceUser.bizplace,
            user: targetUser,
            myBizplace: bizplaceUser.myBizplace
          })
        })

        return await getRepository(Bizplace).query(
          `
            SELECT
              id,
              name,
              description,
              CASE WHEN id IN (
              SELECT
                B.id
              FROM
                bizplaces B JOIN bizplaces_users BU
              ON
                B.id = BU.bizplace_id
              WHERE
                BU.user_id = '${targetUser.id}'
              ) THEN true
                ELSE false
              END AS assigned,
              BU.my_bizplace
            FROM
              bizplaces B LEFT JOIN bizplaces_users BU
            ON
              B.id = BU.bizplace_id
          `
        )
      } catch (e) {
        throw e
      }
    })
  }
}
