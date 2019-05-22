import { gql } from 'apollo-server-koa'

export const Customer = gql`
  type Customer {
    id: String
    name: String
    description: String
  }
`
