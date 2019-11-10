import { createPartner } from './create-partner'
import { deletePartner } from './delete-partner'
import { partnerCustomers } from './partner-customers'
import { partnerCustomer } from './partner-customer'
import { partnerVendors } from './partner-vendors'
import { partnerVendor } from './partner-vendor'

export const Query = { ...partnerCustomers, ...partnerCustomer, ...partnerVendors, ...partnerVendor }

export const Mutation = {
  ...createPartner,
  ...deletePartner
}
