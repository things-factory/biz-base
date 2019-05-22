import { vendorResolver } from './vendor'
import { vendorsResolver } from './vendors'

import { updateVendor } from './update-vendor'
import { createVendor } from './create-vendor'
import { deleteVendor } from './delete-vendor'

export const Query = {
  ...vendorResolver,
  ...vendorsResolver
}

export const Mutation = {
  ...updateVendor,
  ...createVendor,
  ...deleteVendor
}
