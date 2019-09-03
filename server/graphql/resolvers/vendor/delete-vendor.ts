import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const deleteVendor = {
  async deleteVendor(_: any, { name }, context: any) {
    return await getRepository(Vendor).delete({ domain: context.state.domain, name })
  }
}
