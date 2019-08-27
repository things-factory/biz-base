import { Customer } from './customer'
import { CustomerList } from './customer-list'
import { CustomerPatch } from './customer-patch'
import { NewCustomer } from './new-customer'
import { directivePriviledge } from '@things-factory/auth-base'

export const Mutation = `
  createCustomer (
    Customer: NewCustomer!
  ): Customer @priviledge(category: "customer", priviledge: "mutation")

  updateCustomer (
    name: String!
    patch: CustomerPatch!
  ): Customer @priviledge(category: "customer", priviledge: "mutation")

  updateMultipleCustomer (
    patches: [CustomerPatch]!
  ): [Customer] @priviledge(category: "customer", priviledge: "mutation")

  deleteCustomer (
    name: String!
  ): Boolean @priviledge(category: "customer", priviledge: "mutation")

  deleteCustomers (
    names: [String]!
  ): Boolean @priviledge(category: "customer", priviledge: "mutation")
`

export const Query = `
  customers(filters: [Filter], pagination: Pagination, sortings: [Sorting]): CustomerList @priviledge(category: "customer", priviledge: "query")
  customer(name: String!): Customer @priviledge(category: "customer", priviledge: "query")
`

export const Types = [Customer, NewCustomer, CustomerPatch, CustomerList]
