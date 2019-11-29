import { BizOption } from './biz-option'
import { NewBizOption } from './new-biz-option'
import { BizOptionPatch } from './biz-option-patch'
import { BizOptionList } from './biz-option-list'

export const Mutation = `
  createBizOption (
    bizOption: NewBizOption!
  ): BizOption

  updateBizOption (
    name: String!
    patch: BizOptionPatch!
  ): BizOption

  deleteBizOption (
    name: String!
  ): Boolean

  deleteBizOptions (
    names: [String]!
  ): Boolean
`

export const Query = `
  bizOptions(filters: [Filter], pagination: Pagination, sortings: [Sorting]): BizOptionList
  bizOption(name: String!): BizOption
`

export const Types = [BizOption, NewBizOption, BizOptionPatch, BizOptionList]
