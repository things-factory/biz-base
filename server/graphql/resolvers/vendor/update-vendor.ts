import { getRepository } from 'typeorm'
import { Vendor, Bizplace } from '../../../entities'

export const updateVendor = {
  async updateVendor(_: any, { name, patch }, context: any) {
    const vendor = await getRepository(Vendor).findOne({ domain: context.domain, name })
    if (patch.bizplace && patch.bizplace.id) {
      patch.bizplace = await getRepository(Bizplace).findOne(patch.bizplace.id)
    }

    return await getRepository(Vendor).save({
      ...vendor,
      ...patch,
      updater: context.state.user
    })
  }
}
