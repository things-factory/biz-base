import { getRepository } from 'typeorm'
import { Customer } from '../../../entities'

export const customerResolver = {
  async customer(_, { name }, context, info) {
    const repository = getRepository(Customer)

    return await repository.findOne({ name })
  }
}
