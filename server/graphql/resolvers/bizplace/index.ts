import { bizplaceResolver } from './bizplace'
import { bizplacesResolver } from './bizplaces'

import { updateBizplace } from './update-bizplace'
import { createBizplace } from './create-bizplace'
import { deleteBizplace } from './delete-bizplace'

export const Query = {
  ...bizplaceResolver,
  ...bizplacesResolver
}

export const Mutation = {
  ...updateBizplace,
  ...createBizplace,
  ...deleteBizplace
}
