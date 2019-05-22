import { getRepository } from 'typeorm'
import { Customer } from '../../../entities'

export const updateCustomer = {
  async updateCustomer(_, { id, patch }) {
    const repository = getRepository(Customer)

    const customer = await repository.findOne({ id })

    return await repository.save({
      ...customer,
      ...patch
    })
  }
}
