import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const updateVendor = {
  async updateVendor(_, { id, patch }) {
    const repository = getRepository(Vendor)

    const vendor = await repository.findOne({ id })

    return await repository.save({
      ...vendor,
      ...patch
    })
  }
}
