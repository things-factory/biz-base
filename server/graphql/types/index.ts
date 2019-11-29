import { Filter, ObjectRef, Pagination, Sorting } from '@things-factory/shell'
import * as Bizplace from './bizplace'
import * as Company from './company'
import * as ContactPoint from './contact-point'
import * as Partner from './partner'
import * as Worker from './worker'
import * as BizOption from './biz-option'
import * as BizOptionDetail from './biz-option-detail'

export const queries = [
  Bizplace.Query,
  Company.Query,
  ContactPoint.Query,
  Worker.Query,
  Partner.Query,
  BizOption.Query,
  BizOptionDetail.Query
]

export const mutations = [
  Bizplace.Mutation,
  Company.Mutation,
  ContactPoint.Mutation,
  Worker.Mutation,
  Partner.Mutation,
  BizOption.Mutation,
  BizOptionDetail.Mutation
]

export const types = [
  Filter,
  Pagination,
  Sorting,
  ObjectRef,
  ...Bizplace.Types,
  ...Company.Types,
  ...ContactPoint.Types,
  ...Worker.Types,
  ...Partner.Types,
  ...BizOption.Types,
  ...BizOptionDetail.Types
]
