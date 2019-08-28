import { Bizplace } from '../entities'
import { getRepository } from 'typeorm'

export async function bizMiddleware(context: any, next: any) {
  try {
    if (context && context.state && context.state.user && context.state.user.id) {
      const userId = context.state.user.id
      context.bizplaces = await getRepository(Bizplace).query(
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

      return next()
    }
  } catch (e) {
    console.error(e)
  }
}
