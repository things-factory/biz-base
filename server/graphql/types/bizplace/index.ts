import { Bizplace } from './bizplace'
import { BizplaceList } from './bizplace-list'
import { BizplacePatch } from './bizplace-patch'
import { NewBizplace } from './new-bizplace'
import { UserBizplace } from './user-bizplace'

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
  userBizplaces(email: String!): [UserBizplace] @priviledge(category: "bizplace", priviledge: "query")
  bizplaces(filters: [Filter], pagination: Pagination, sortings: [Sorting]): BizplaceList @priviledge(category: "bizplace", priviledge: "query")
  bizplace(name: String!): Bizplace @priviledge(category: "bizplace", priviledge: "query")
`

export const Types = [Bizplace, NewBizplace, BizplacePatch, BizplaceList, UserBizplace]
