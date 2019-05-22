import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { Customer } from '../../../entities'

export const createCustomer = {
  async createCustomer(_, { customer: attrs }) {
    const repository = getRepository(Customer)
    const newCustomer = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newCustomer)
  }
}
