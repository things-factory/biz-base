import * as Bizplace from './bizplace'
import * as Company from './company'
import * as ContactPoint from './contact-point'
import * as Customer from './customer'
import * as Vendor from './vendor'
import * as Worker from './worker'
import { Filter, Pagination, Sorting, ObjectRef } from '@things-factory/shell'

export const queries = [Bizplace.Query, Company.Query, ContactPoint.Query, Customer.Query, Vendor.Query, Worker.Query]

export const mutations = [
  Bizplace.Mutation,
  Company.Mutation,
  ContactPoint.Mutation,
  Customer.Mutation,
  Vendor.Mutation,
  Worker.Mutation
]

export const types = [
  Filter,
  Pagination,
  Sorting,
  ObjectRef,
  ...Bizplace.Types,
  ...Company.Types,
  ...ContactPoint.Types,
  ...Customer.Types,
  ...Vendor.Types,
  ...Worker.Types
]
