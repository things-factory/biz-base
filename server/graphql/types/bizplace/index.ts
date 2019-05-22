import { Bizplace } from './bizplace'
import { NewBizplace } from './new-bizplace'
import { BizplacePatch } from './bizplace-patch'

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
  bizplaces: [Bizplace]
  bizplace(id: String!): Bizplace
`

export const Types = [Bizplace, NewBizplace, BizplacePatch]
