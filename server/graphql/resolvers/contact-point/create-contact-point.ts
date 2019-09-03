import { getRepository } from 'typeorm'
import { ContactPoint, Bizplace } from '../../../entities'

export const createContactPoint = {
  async createContactPoint(_: any, { contactPoint }, context: any) {
    if (contactPoint.bizplace && contactPoint.bizplace.id) {
      contactPoint.bizplace = await getRepository(Bizplace).findOne(contactPoint.bizplace.id)
    }

    return await getRepository(ContactPoint).save({
      ...contactPoint,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
