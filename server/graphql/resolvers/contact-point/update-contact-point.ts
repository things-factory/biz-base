import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const updateContactPoint = {
  async updateContactPoint(_: any, { name, patch }, context: any) {
    const repository = getRepository(ContactPoint)
    const contactPoint = await repository.findOne({ domain: context.domain, name })

    return await repository.save({
      ...contactPoint,
      ...patch,
      updater: context.state.user
    })
  }
}
