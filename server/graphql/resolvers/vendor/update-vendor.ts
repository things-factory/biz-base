import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const updateVendor = {
  async updateVendor(_: any, { name, patch }, context: any) {
    const vendor = await getRepository(Vendor).findOne({ domain: context.domain, name })

    return await getRepository(Vendor).save({
      ...vendor,
      ...patch,
      updater: context.state.user
    })
  }
}
