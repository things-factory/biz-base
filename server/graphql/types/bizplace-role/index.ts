import { AssignedRole } from './assigned-role'
import { AssignedRoleList } from './assigned-role-list'
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
  assignedRolesByUser(user: ObjectRef!): AssignedRoleList
  rolesByBizplace(bizplace: ObjectRef!): RoleList
  rolesByUserBizplace: RoleList
`

export const Types = [
  AssignedRole,
  AssignedRoleList,
  BizplaceRole,
  BizplaceRoleList,
  BizplaceRolePatch,
  NewBizplaceRole
]
