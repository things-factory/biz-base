import { Bizplace } from './bizplace'
import { BizplaceList } from './bizplace-list'
import { BizplacePatch } from './bizplace-patch'
import { BizplaceUsersPatch } from './bizplace-users-patch'
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

  updateUserBizplaces (
    email: String!
    bizplaceUsers: [BizplaceUsersPatch]!
  ): [UserBizplace] @priviledge(category: "bizplace", priviledge: "mutation")
`

export const Query = `
  customerBizplaces(name: String!): [Bizplace] @priviledge(category: "bizplace", priviledge: "query")
  userBizplaces(email: String!): [UserBizplace] @priviledge(category: "bizplace", priviledge: "query")
  bizplaces(filters: [Filter], pagination: Pagination, sortings: [Sorting]): BizplaceList @priviledge(category: "bizplace", priviledge: "query")
  bizplace(name: String!): Bizplace @priviledge(category: "bizplace", priviledge: "query")
`

export const Types = [Bizplace, NewBizplace, BizplacePatch, BizplaceUsersPatch, BizplaceList, UserBizplace]
