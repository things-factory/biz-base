import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { Bizplace } from './bizplace'
import { BizplaceList } from './bizplace-list'
import { BizplacePatch } from './bizplace-patch'
import { NewBizplace } from './new-bizplace'

export const Mutation = `
  createBizplace (
    bizplace: NewBizplace!
  ): Bizplace

  updateBizplace (
    id: String!
    patch: BizplacePatch!
  ): Bizplace

  deleteBizplace (
    id: String!
  ): Bizplace
`

export const Query = `
  bizplaces(filters: [Filter], pagination: Pagination, sortings: [Sorting]): BizplaceList
  bizplace(id: String!): Bizplace
`

export const Types = [Filter, Pagination, Sorting, Bizplace, NewBizplace, BizplacePatch, BizplaceList]
