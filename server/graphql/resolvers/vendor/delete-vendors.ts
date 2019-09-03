import { getRepository, In } from 'typeorm'
import { Vendor } from '../../../entities'

export const deleteVendors = {
  async deleteVendors(_: any, { names }, context: any) {
    await getRepository(Vendor).delete({
      domain: context.state.domain,
      name: In(names)
    })

    return true
  }
}
