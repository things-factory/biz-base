import { Vendor } from './vendor'
import { NewVendor } from './new-vendor'
import { VendorPatch } from './vendor-patch'

export const Mutation = `
  createVendor (
    vendor: NewVendor!
  ): Vendor

  updateVendor (
    id: String!
    patch: VendorPatch!
  ): Vendor

  deleteVendor (
    id: String!
  ): Vendor
`

export const Query = `
  vendors: [Vendor]
  vendor(id: String!): Vendor
`

export const Types = [Vendor, NewVendor, VendorPatch]
