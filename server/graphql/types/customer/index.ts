import { Customer } from './customer'
import { NewCustomer } from './new-customer'
import { CustomerPatch } from './customer-patch'

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
  Customers: [Customer]
  Customer(id: String!): Customer
`

export const Types = [Customer, NewCustomer, CustomerPatch]
