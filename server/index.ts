import { getRepository } from 'typeorm'
import { Bizplace } from './entities'

export * from './entities'
export * from './graphql'
export * from './migrations'

import './middlewares'

export async function getUserBizplaces(context: any) {
  if (context && context.state && context.state.user && context.state.user.id) {
    const userId = context.state.user.id
    let bizplaces = []
    try {
      // For sqlite
      bizplaces = await getRepository(Bizplace).query(
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
              bizplaces_id
            FROM
              bizplaces_users
            WHERE
              users_id = :userId
          )
        `,
        [userId]
      )
    } catch (e) {
      // For postgres temporarly
      bizplaces = await getRepository(Bizplace).query(
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
              bizplaces_id
            FROM
              bizplaces_users
            WHERE
              users_id = $1
          )
        `,
        [userId]
      )
    } finally {
      return bizplaces
    }
  }
}
