import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const createVendor = {
  async createVendor(_, { vendor: attrs }) {
    const repository = getRepository(Vendor)
    const newVendor = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newVendor)
  }
}
