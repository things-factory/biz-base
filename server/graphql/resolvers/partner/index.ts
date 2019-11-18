import { createPartner } from './create-partner'
import { deletePartner } from './delete-partner'
import { partnerCustomers } from './partner-customers'
import { partnerVendors } from './partner-vendors'

export const Query = { ...partnerCustomers, ...partnerVendors }

export const Mutation = {
  ...createPartner,
  ...deletePartner
}
