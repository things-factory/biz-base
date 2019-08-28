import { getRepository } from 'typeorm'
import { Bizplace } from './entities'

export * from './entities'
export * from './graphql'
export * from './migrations'

process.on('bootstrap-module-register-context' as any, function(app: any, contextList: any) {
  contextList.push(async function({ ctx }) {
    if (ctx && ctx.state && ctx.state.user && ctx.state.user.id) {
      const userId = ctx.state.user.id

      ctx.bizplaces = await getRepository(Bizplace).query(
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
    }

    return ctx
  })
})
