import { getRepository } from 'typeorm'
import { ContactPoint, Bizplace } from '../../../entities'

export const createContactPoint = {
  async createContactPoint(_: any, { contactPoint }, context: any) {
    if (contactPoint.bizplaceId) {
      contactPoint.bizplace = await getRepository(Bizplace).findOne(contactPoint.bizplaceId)
      delete contactPoint.bizplaceId
    }

    return await getRepository(ContactPoint).save({
      domain: context.domain,
      creator: context.state.user,
      updater: context.state.user,
      ...contactPoint
    })
  }
}
