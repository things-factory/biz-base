import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const updateVendor = {
  async updateVendor(_: any, { name, patch }, context: any) {
    const repository = getRepository(Vendor)
    const vendor = await repository.findOne({ domain: context.domain, name })

    return await repository.save({
      ...vendor,
      ...patch,
      updater: context.state.user
    })
  }
}
