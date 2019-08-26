import { gql } from 'apollo-server-koa'

export const Partner = gql`
  type Partner {
    customer: Customer
    vendor: Vendor
  }
`
