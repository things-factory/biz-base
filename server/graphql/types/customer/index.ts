import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { Customer } from './customer'
import { CustomerList } from './customer-list'
import { CustomerPatch } from './customer-patch'
import { NewCustomer } from './new-customer'

export const Mutation = `
  createCustomer (
    Customer: NewCustomer!
  ): Customer

  updateCustomer (
    id: String!
    patch: CustomerPatch!
  ): Customer

  deleteCustomer (
    id: String!
  ): Customer
`

export const Query = `
  customers(filters: [Filter], pagination: Pagination, sortings: [Sorting]): CustomerList
  customer(id: String!): Customer
`

export const Types = [Filter, Pagination, Sorting, Customer, NewCustomer, CustomerPatch, CustomerList]
