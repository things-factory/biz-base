import { bizOptionResolver } from './biz-option'
import { bizOptionsResolver } from './biz-options'

import { updateBizOption } from './update-biz-option'
import { createBizOption } from './create-biz-option'
import { deleteBizOption } from './delete-biz-option'
import { deleteBizOptions } from './delete-biz-options'

export const Query = {
  ...bizOptionsResolver,
  ...bizOptionResolver
}

export const Mutation = {
  ...updateBizOption,
  ...createBizOption,
  ...deleteBizOption,
  ...deleteBizOptions
}
