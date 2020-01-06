import { AssignedRole } from './assigned-role'
import { BizplaceRole } from './bizplace-role'
import { BizplaceRoleAssignment } from './bizplace-role-assignment'
import { BizplaceRoleList } from './bizplace-role-list'
import { BizplaceRolePatch } from './bizplace-role-patch'
import { NewBizplaceRole } from './new-bizplace-role'

// export const Mutation = `
//   deleteBizplaceRoles (
//     names: [String]!
//   ): Boolean
// `

export const Query = `
  assignedRolesByUser(user: ObjectRef!): [AssignedRole]
  rolesByBizplace(bizplace: ObjectRef!): RoleList
  rolesByUserBizplace: RoleList
  bizplaceRoleAssignment(role: ObjectRef!): BizplaceRoleAssignment
`

export const Types = [
  AssignedRole,
  BizplaceRole,
  BizplaceRoleList,
  BizplaceRolePatch,
  NewBizplaceRole,
  BizplaceRoleAssignment
]
