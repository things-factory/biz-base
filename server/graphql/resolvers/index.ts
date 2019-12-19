import * as BizOption from './biz-option'
import * as BizOptionDetail from './biz-option-detail'
import * as Bizplace from './bizplace'
import * as BizplaceRole from './bizplace-role'
import * as Company from './company'
import * as ContactPoint from './contact-point'
import * as Manager from './manager'
import * as Partner from './partner'
import * as Worker from './worker'

export const queries = [
  Bizplace.Query,
  BizplaceRole.Query,
  Company.Query,
  ContactPoint.Query,
  Worker.Query,
  Partner.Query,
  BizOption.Query,
  BizOptionDetail.Query,
  Manager.Query
]

export const mutations = [
  Bizplace.Mutation,
  Company.Mutation,
  ContactPoint.Mutation,
  Worker.Mutation,
  Partner.Mutation,
  BizOption.Mutation,
  BizOptionDetail.Mutation,
  Manager.Mutation
]
