import { BizplaceRole } from './bizplace-role'
import { BizplaceRoleList } from './bizplace-role-list'
import { BizplaceRolePatch } from './bizplace-role-patch'
import { NewBizplaceRole } from './new-bizplace-role'

// export const Mutation = `
//   deleteBizplaceRoles (
//     names: [String]!
//   ): Boolean
// `

export const Query = `
  rolesByBizplace(bizplaceId: String!): BizplaceRoleList
`

export const Types = [BizplaceRole, BizplaceRoleList, BizplaceRolePatch, NewBizplaceRole]
