import { gql } from 'apollo-server-koa'

export const CustomerList = gql`
  type CustomerList {
    items: [Customer]
    total: Int
  }
`
