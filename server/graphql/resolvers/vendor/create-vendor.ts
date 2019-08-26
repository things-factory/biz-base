import { getRepository } from 'typeorm'
import { Vendor, Bizplace } from '../../../entities'

export const createVendor = {
  async createVendor(_: any, { vendor }, context: any) {
    if (vendor.bizplace && vendor.bizplace.id) {
      vendor.bizplace = await getRepository(Bizplace).findOne(vendor.bizplace.id)
    }

    return await getRepository(Vendor).save({
      ...vendor,
      domain: context.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
