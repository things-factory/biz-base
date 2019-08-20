import { bizplaceResolver } from './bizplace'
import { bizplacesResolver } from './bizplaces'

import { updateBizplace } from './update-bizplace'
import { updateMultipleBizplace } from './update-multiple-bizplace'
import { createBizplace } from './create-bizplace'
import { deleteBizplace } from './delete-bizplace'
import { deleteBizplaces } from './delete-bizplaces'

export const Query = {
  ...bizplaceResolver,
  ...bizplacesResolver
}

export const Mutation = {
  ...updateBizplace,
  ...updateMultipleBizplace,
  ...createBizplace,
  ...deleteBizplace,
  ...deleteBizplaces
}
