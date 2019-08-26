import { Partner } from './partner'
import { PartnerList } from './partner-list'

export const Mutation = `
  createPartner (
    customer: ObjectRef!
    vendor: ObjectRef!
  ): Partner

  deletePartner (
    id: String!
  ): Boolean
`

export const Query = `
  partnerCustomers(vendor: ObjectRef!, filters: [Filter], pagination: Pagination, sortings: [Sorting]): PartnerList
  partnerCustomer(vendor: ObjectRef!, customer: ObjectRef!): Partner
  partnerVendors(customer: ObjectRef!, filters: [Filter], pagination: Pagination, sortings: [Sorting]): PartnerList
  partnerVendor(customer: ObjectRef!, vendor: ObjectRef!): Partner
`

export const Types = [Partner, PartnerList]
