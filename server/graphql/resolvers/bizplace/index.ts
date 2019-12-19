import { bizplaceResolver } from './bizplace'
import { bizplaceUsersResolver } from './bizplace-users'
import { bizplacesResolver } from './bizplaces'
import { businessBizplaceResolver } from './business-bizplace'
import { createBizplace } from './create-bizplace'
import { customerBizplacesResolver } from './customer-bizplaces'
import { deleteBizplace } from './delete-bizplace'
import { deleteBizplaces } from './delete-bizplaces'
import { updateBizplace } from './update-bizplace'
import { updateMultipleBizplace } from './update-multiple-bizplace'
import { updateUserBizplaces } from './update-user-bizplaces'
import { userBizplacesResolver } from './user-bizplaces'

export const Query = {
  ...bizplaceResolver,
  ...bizplacesResolver,
  ...bizplaceUsersResolver,
  ...userBizplacesResolver,
  ...customerBizplacesResolver,
  ...businessBizplaceResolver
}

export const Mutation = {
  ...updateBizplace,
  ...updateMultipleBizplace,
  ...createBizplace,
  ...deleteBizplace,
  ...deleteBizplaces,
  ...updateUserBizplaces
}
