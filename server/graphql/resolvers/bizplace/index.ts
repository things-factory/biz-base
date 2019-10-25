import { bizplaceResolver } from './bizplace'
import { bizplacesResolver } from './bizplaces'
import { userBizplacesResolver } from './user-bizplaces'
import { customerBizplacesResolver } from './customer-bizplaces'

import { updateBizplace } from './update-bizplace'
import { updateMultipleBizplace } from './update-multiple-bizplace'
import { createBizplace } from './create-bizplace'
import { deleteBizplace } from './delete-bizplace'
import { deleteBizplaces } from './delete-bizplaces'
import { updateUserBizplaces } from './update-user-bizplaces'

export const Query = {
  ...bizplaceResolver,
  ...bizplacesResolver,
  ...userBizplacesResolver,
  ...customerBizplacesResolver
}

export const Mutation = {
  ...updateBizplace,
  ...updateMultipleBizplace,
  ...createBizplace,
  ...deleteBizplace,
  ...deleteBizplaces,
  ...updateUserBizplaces
}
