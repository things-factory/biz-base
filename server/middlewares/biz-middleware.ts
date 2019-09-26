import { getRepository } from 'typeorm'
import { Bizplace } from '../entities'

export async function bizMiddleware(context: any, next: any) {
  if (context && context.state && context.state.user && context.state.user.id) {
    const userId = context.state.user.id
    context.state.bizplaces = await getRepository(Bizplace).query(
      `
        SELECT
          id,
          name,
          description
        FROM
          bizplaces
        WHERE
          id
        IN (
          SELECT
            bizplace_id
          FROM
            bizplaces_users
          WHERE
            user_id = '${userId}'
        )
      `
    )

    const mainBizplace = await getRepository(Bizplace).query(
      `
        SELECT
          id,
          name,
          description
        FROM
          bizplaces B
        LEFT JOIN
          bizplaces_users BU
        ON
          B.id = BU.bizplace_id
        WHERE
          user_id = '${userId}'
        AND
          BU.main_bizplace = true
        LIMIT 1
      `
    )

    context.state.mainBizplace = mainBizplace[0]
  }

  return next()
}
