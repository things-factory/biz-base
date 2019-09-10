import { User } from '@things-factory/auth-base'
import { Bizplace } from '../../../entities'
import { getManager, getRepository } from 'typeorm'

export const updateUserBizplaces = {
  async updateUserBizplaces(_: any, { email, bizplaces }, context: any) {
    return await getManager().transaction(async transactionalEntityManager => {
      try {
        const targetUser: User = await getRepository(User).findOne({ where: { domain: context.state.domain, email } })
        if (!targetUser) throw new Error('user not exists')

        // 1. Delete every bizplaces related with current user.
        transactionalEntityManager.query(`
          DELETE FROM
            bizplaces_users
          WHERE
            users_id = '${targetUser.id}'
        `)

        // 2. Append new user into bizplace.
        const foundBizplaces = await transactionalEntityManager
          .getRepository(Bizplace)
          .findByIds(bizplaces.map((bizplace: Bizplace) => bizplace.id), {
            relations: ['users']
          })

        foundBizplaces.forEach(async (bizplace: Bizplace) => {
          await transactionalEntityManager.getRepository(Bizplace).save({
            ...bizplace,
            users: [...bizplace.users, targetUser]
          })
        })

        return await transactionalEntityManager.getRepository(Bizplace).query(
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
                  B.id = BU.bizplaces_id
                WHERE
                  BU.users_id = '${targetUser.id}'
              ) THEN true
                ELSE false
              END AS assigned
            FROM
              bizplaces
          `
        )
      } catch (e) {
        throw e
      }
    })
  }
}
