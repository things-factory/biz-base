import { Bizplace } from './bizplace'
import { BizplaceList } from './bizplace-list'
import { BizplacePatch } from './bizplace-patch'
import { NewBizplace } from './new-bizplace'

export const Mutation = `
  createBizplace (
    bizplace: NewBizplace!
  ): Bizplace @priviledge(priviledge: "mutation")

  updateBizplace (
    name: String!
    patch: BizplacePatch!
  ): Bizplace @priviledge(priviledge: "mutation")

  updateMultipleBizplace (
    patches: [BizplacePatch]!
  ): [Bizplace] @priviledge(priviledge: "mutation")

  deleteBizplace (
    name: String!
  ): Boolean @priviledge(priviledge: "mutation")

  deleteBizplaces (
    names: [String]!
  ): Boolean @priviledge(priviledge: "mutation")
`

export const Query = `
  bizplaces(filters: [Filter], pagination: Pagination, sortings: [Sorting]): BizplaceList @priviledge(priviledge: "query")
  bizplace(name: String!): Bizplace @priviledge(priviledge: "query")
`

export const Types = [Bizplace, NewBizplace, BizplacePatch, BizplaceList]
