import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const contactPointResolver = {
  async contactPoint(_, { name }, context, info) {
    const repository = getRepository(ContactPoint)

    return await repository.findOne({ name })
  }
}
