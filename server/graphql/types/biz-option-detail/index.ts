import { BizOptionDetail } from './biz-option-detail'
import { NewBizOptionDetail } from './new-biz-option-detail'
import { BizOptionDetailPatch } from './biz-option-detail-patch'
import { BizOptionDetailList } from './biz-option-detail-list'

export const Mutation = `
  createBizOptionDetail (
    bizOptionDetail: NewBizOptionDetail!
  ): BizOptionDetail

  updateBizOptionDetail (
    name: String!
    patch: BizOptionDetailPatch!
  ): BizOptionDetail

  deleteBizOptionDetail (
    name: String!
  ): Boolean

  deleteBizOptionDetails (
    names: [String]!
  ): Boolean
`

export const Query = `
  bizOptionDetails(filters: [Filter], pagination: Pagination, sortings: [Sorting]): BizOptionDetailList
  bizOptionDetail(name: String!): BizOptionDetail
`

export const Types = [BizOptionDetail, NewBizOptionDetail, BizOptionDetailPatch, BizOptionDetailList]
