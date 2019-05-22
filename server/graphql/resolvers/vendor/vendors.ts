import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const vendorsResolver = {
  async vendors() {
    const repository = getRepository(Vendor)

    return await repository.find()
  }
}
