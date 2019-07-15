import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { NewVendor } from './new-vendor'
import { Vendor } from './vendor'
import { VendorList } from './vendor-list'
import { VendorPatch } from './vendor-patch'

export const Mutation = `
  createVendor (
    vendor: NewVendor!
  ): Vendor

  updateVendor (
    name: String!
    patch: VendorPatch!
  ): Vendor

  deleteVendor (
    name: String!
  ): Vendor
`

export const Query = `
  vendors(filters: [Filter], pagination: Pagination, sortings: [Sorting]): VendorList
  vendor(name: String!): Vendor
`

export const Types = [Filter, Pagination, Sorting, Vendor, NewVendor, VendorPatch, VendorList]
