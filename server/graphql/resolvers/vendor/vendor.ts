import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const vendorResolver = {
  async vendor(_, { name }, context, info) {
    const repository = getRepository(Vendor)

    return await repository.findOne({ name })
  }
}
