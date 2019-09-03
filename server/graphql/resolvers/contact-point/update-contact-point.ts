import { getRepository } from 'typeorm'
import { ContactPoint, Bizplace } from '../../../entities'

export const updateContactPoint = {
  async updateContactPoint(_: any, { name, patch }, context: any) {
    const contactPoint = await getRepository(ContactPoint).findOne({ domain: context.state.domain, name })

    if (patch.bizplace && patch.bizplace.id) {
      patch.bizplace = await getRepository(Bizplace).findOne(patch.bizplace.id)
    }

    return await getRepository(ContactPoint).save({
      ...contactPoint,
      ...patch,
      updater: context.state.user
    })
  }
}
