import { NewVendor } from './new-vendor'
import { Vendor } from './vendor'
import { VendorList } from './vendor-list'
import { VendorPatch } from './vendor-patch'
import { directivePriviledge } from '@things-factory/auth-base'

export const Mutation = `
  createVendor (
    vendor: NewVendor!
  ): Vendor @priviledge(category: "vendor", priviledge: "mutation")

  updateVendor (
    name: String!
    patch: VendorPatch!
  ): Vendor @priviledge(category: "vendor", priviledge: "mutation")

  updateMultipleVendor (
    patches: [VendorPatch]!
  ): [Vendor] @priviledge(category: "vendor", priviledge: "mutation")

  deleteVendor (
    name: String!
  ): Boolean @priviledge(category: "vendor", priviledge: "mutation")

  deleteVendors (
    names: [String]!
  ): Boolean @priviledge(category: "vendor", priviledge: "mutation")
`

export const Query = `
  vendors(filters: [Filter], pagination: Pagination, sortings: [Sorting]): VendorList @priviledge(category: "vendor", priviledge: "query")
  vendor(name: String!): Vendor @priviledge(category: "vendor", priviledge: "query")
`

export const Types = [Vendor, NewVendor, VendorPatch, VendorList]
