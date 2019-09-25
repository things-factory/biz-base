import { Bizplace } from '../entities'
import { getRepository } from 'typeorm'

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
  }

  return next()
}
