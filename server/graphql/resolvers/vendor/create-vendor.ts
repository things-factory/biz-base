import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const createVendor = {
  async createVendor(_: any, { vendor }, context: any) {
    return await getRepository(Vendor).save({
      domain: context.domain,
      ...vendor,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
