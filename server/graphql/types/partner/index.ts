import { Partner } from './partner'
import { PartnerList } from './partner-list'
import { PartnerRoleAssignment } from './partner-role-assignment'

export const Mutation = `
  createPartner (
    customer: ObjectRef!
    vendor: ObjectRef!
  ): Partner

  deletePartner (
    id: String!
  ): Boolean

  updateAssignedRole (
    role: ObjectRef!
    bizplaces: [ObjectRef]
    selfAssignment: Boolean
  ): BizplaceRoleAssignment
`

export const Query = `
  partners(filters: [Filter], pagination: Pagination, sortings: [Sorting]): PartnerList
  roleAssignedPartners(role: ObjectRef!): [PartnerRoleAssignment]
`

export const Types = [Partner, PartnerList, PartnerRoleAssignment]
