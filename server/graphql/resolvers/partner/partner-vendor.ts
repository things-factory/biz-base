import { getRepository } from 'typeorm'
import { Partner, Vendor, Customer } from '../../../entities'

export const partnerVendor = {
  async partnerVendor(_: any, { customer, vendor }) {
    return await getRepository(Partner).findOne({
      where: {
        customer: await getRepository(Customer).findOne(customer.id),
        vendor: await getRepository(Vendor).findOne(vendor.id)
      },
      relations: ['customer', 'vendor', 'creator', 'updater']
    })
  }
}
