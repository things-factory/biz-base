import { Bizplace } from './bizplace'
import { BizplaceList } from './bizplace-list'
import { BizplacePatch } from './bizplace-patch'
import { NewBizplace } from './new-bizplace'
import { directivePriviledge } from '@things-factory/auth-base'

export const Mutation = `
  createBizplace (
    bizplace: NewBizplace!
  ): Bizplace @priviledge(category: "bizplace", priviledge: "mutation")

  updateBizplace (
    name: String!
    patch: BizplacePatch!
  ): Bizplace @priviledge(category: "bizplace", priviledge: "mutation")

  updateMultipleBizplace (
    patches: [BizplacePatch]!
  ): [Bizplace] @priviledge(category: "bizplace", priviledge: "mutation")

  deleteBizplace (
    name: String!
  ): Boolean @priviledge(category: "bizplace", priviledge: "mutation")

  deleteBizplaces (
    names: [String]!
  ): Boolean @priviledge(category: "bizplace", priviledge: "mutation")
`

export const Query = `
  bizplaces(filters: [Filter], pagination: Pagination, sortings: [Sorting]): BizplaceList @priviledge(category: "bizplace", priviledge: "query")
  bizplace(name: String!): Bizplace @priviledge(category: "bizplace", priviledge: "query")
`

export const Types = [Bizplace, NewBizplace, BizplacePatch, BizplaceList]
