import { bizOptionDetailResolver } from './biz-option-detail'
import { bizOptionDetailsResolver } from './biz-option-details'

import { updateBizOptionDetail } from './update-biz-option-detail'
import { createBizOptionDetail } from './create-biz-option-detail'
import { deleteBizOptionDetail } from './delete-biz-option-detail'
import { deleteBizOptionDetails } from './delete-biz-option-details'

export const Query = {
  ...bizOptionDetailsResolver,
  ...bizOptionDetailResolver
}

export const Mutation = {
  ...updateBizOptionDetail,
  ...createBizOptionDetail,
  ...deleteBizOptionDetail,
  ...deleteBizOptionDetails
}
