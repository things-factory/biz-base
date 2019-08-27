import { vendorResolver } from './vendor'
import { vendorsResolver } from './vendors'

import { updateVendor } from './update-vendor'
import { updateMultipleVendor } from './update-multiple-vendor'
import { createVendor } from './create-vendor'
import { deleteVendor } from './delete-vendor'
import { deleteVendors } from './delete-vendors'

export const Query = {
  ...vendorResolver,
  ...vendorsResolver
}

export const Mutation = {
  ...updateVendor,
  ...createVendor,
  ...deleteVendor,
  ...deleteVendors,
  ...updateMultipleVendor
}
