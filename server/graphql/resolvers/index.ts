import * as Bizplace from './bizplace'
import * as Company from './company'
import * as ContactPoint from './contact-point'
import * as Customer from './customer'
import * as Vendor from './vendor'

export const queries = [Bizplace.Query, Company.Query, ContactPoint.Query, Customer.Query, Vendor.Query]

export const mutations = [
  Bizplace.Mutation,
  Company.Mutation,
  ContactPoint.Mutation,
  Customer.Mutation,
  Vendor.Mutation
]
