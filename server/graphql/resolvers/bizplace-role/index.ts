import { assignedRolesByUser, assignedRolesByUserResolver } from './assigned-roles-by-user'
import { rolesByBizplace, rolesByBizplaceResolver } from './roles-by-bizplace'
import { rolesByUserBizplace, rolesByUserBizplaceResolver } from './roles-by-user-bizplace'

export const Query = {
  ...assignedRolesByUserResolver,
  ...rolesByBizplaceResolver,
  ...rolesByUserBizplaceResolver
}

// export const Mutation = {
//   ...createBizplaceRole,
// }

export { assignedRolesByUser, rolesByBizplace, rolesByUserBizplace }
