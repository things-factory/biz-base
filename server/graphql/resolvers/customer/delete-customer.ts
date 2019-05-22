import { getRepository } from 'typeorm'
import { Customer } from '../../../entities'

export const deleteCustomer = {
  async deleteCustomer(_, { id }) {
    const repository = getRepository(Customer)

    return await repository.delete(id)
  }
}
