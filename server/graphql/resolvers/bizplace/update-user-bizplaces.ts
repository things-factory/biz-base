import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'
import { User } from '@things-factory/auth-base'

export const updateUserBizplaces = {
  async updateUserBizplaces(_: any, { email, bizplaces }, context: any) {
    const repository = getRepository(User)
    const user: User = repository.findOne({ where: { domain: context.state.domain, email } })

    user.bizplaces = await Promise.all(
      bizplaces.map(async (bizplace: Bizplace) => {
        await getRepository(Bizplace).findOne(bizplace.id)
      })
    )

    repository.save(user)
  }
}
