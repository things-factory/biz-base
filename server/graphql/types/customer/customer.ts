import { gql } from 'apollo-server-koa'

export const Customer = gql`
  type Customer {
    id: String
    domain: Domain
    name: String
    description: String
    bizplace: Bizplace
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
