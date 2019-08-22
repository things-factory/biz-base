import { Bizplace } from './bizplace'
import { BizplaceList } from './bizplace-list'
import { BizplacePatch } from './bizplace-patch'
import { NewBizplace } from './new-bizplace'

export const Mutation = `
  createBizplace (
    bizplace: NewBizplace!
  ): Bizplace

  updateBizplace (
    name: String!
    patch: BizplacePatch!
  ): Bizplace

  updateMultipleBizplace (
    patches: [BizplacePatch]!
  ): [Bizplace]

  deleteBizplace (
    name: String!
  ): Boolean

  deleteBizplaces (
    names: [String]!
  ): Boolean
`

export const Query = `
  bizplaces(filters: [Filter], pagination: Pagination, sortings: [Sorting]): BizplaceList
  bizplace(name: String!): Bizplace
`

export const Types = [Bizplace, NewBizplace, BizplacePatch, BizplaceList]
