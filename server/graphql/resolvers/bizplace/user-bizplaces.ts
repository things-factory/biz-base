import { User } from '@things-factory/auth-base'
import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const userBizplacesResolver = {
  async userBizplaces(_: any, { email }, context: any) {
    const user: User = await getRepository(User).findOne({ domain: context.state.domain, email })
    const userBizplaces = await getRepository(Bizplace).query(
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
              BU.user_id = '${user.id}'
          ) THEN true
            ELSE false
          END AS assigned,
          BU.main_bizplace
        FROM
          bizplaces B LEFT JOIN bizplaces_users BU
        ON
          B.id = BU.bizplace_id
        WHERE BU.user_id = '${user.id}' OR BU.user_id IS NULL OR BU.user_id = ''
      `
    )

    return userBizplaces
  }
}
