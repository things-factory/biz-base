import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const deleteVendor = {
  async deleteVendor(_, { id }) {
    const repository = getRepository(Vendor)

    return await repository.delete(id)
  }
}
