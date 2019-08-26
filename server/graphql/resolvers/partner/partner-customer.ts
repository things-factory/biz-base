import { getRepository } from 'typeorm'
import { Partner, Vendor, Customer } from '../../../entities'

export const partnerCustomer = {
  async partnerCustomer(_: any, { vendor, customer }) {
    return await getRepository(Partner).findOne({
      where: {
        vendor: await getRepository(Vendor).findOne(vendor.id),
        customer: await getRepository(Customer).findOne(customer.id)
      },
      relations: ['vendor', 'customer', 'creator', 'updater']
    })
  }
}
