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

  approvePartnership (
    id: String!
  ): Boolean

  rejectPartnership (
    id: String!
  ): Boolean
`

export const Query = `
  partners(filters: [Filter], pagination: Pagination, sortings: [Sorting]): PartnerList
`

export const Types = [Partner, PartnerList]
