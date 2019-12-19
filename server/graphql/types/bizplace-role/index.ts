import { AssignedRole } from './assigned-role'
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
  assignedRolesByUser(user: ObjectRef!): AssignedRole
  rolesByBizplace(bizplace: ObjectRef!): RoleList
  rolesByUserBizplace: RoleList
`

export const Types = [AssignedRole, BizplaceRole, BizplaceRoleList, BizplaceRolePatch, NewBizplaceRole]
