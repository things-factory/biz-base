import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const createContactPoint = {
  async createContactPoint(_: any, { contactPoint }, context: any) {
    return await getRepository(ContactPoint).save({
      domain: context.domain,
      ...contactPoint,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
