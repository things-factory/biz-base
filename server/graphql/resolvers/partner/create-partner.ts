import { getRepository } from 'typeorm'
import { Customer, Partner, Vendor } from '../../../entities'

export const createPartner = {
  async createPartner(_: any, { customer, vendor }) {
    return await getRepository(Partner).create({
      vendor: await getRepository(Vendor).findOne(vendor.id),
      customer: await getRepository(Customer).findOne(customer.id)
    })
  }
}
