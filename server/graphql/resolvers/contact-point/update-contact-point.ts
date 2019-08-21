import { getRepository } from 'typeorm'
import { ContactPoint, Bizplace } from '../../../entities'

export const updateContactPoint = {
  async updateContactPoint(_: any, { name, patch }, context: any) {
    const contactPoint = await getRepository(ContactPoint).findOne({ domain: context.domain, name })

    if (patch.bizplaceId) {
      patch.bizplace = await getRepository(Bizplace).findOne(patch.bizplaceId)
      delete patch.bizplaceId
    }

    return await getRepository(ContactPoint).save({
      ...contactPoint,
      ...patch,
      updater: context.state.user
    })
  }
}
