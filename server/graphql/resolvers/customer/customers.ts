import { getRepository } from 'typeorm'
import { Customer } from '../../../entities'

export const customersResolver = {
  async customers() {
    const repository = getRepository(Customer)

    return await repository.find()
  }
}
