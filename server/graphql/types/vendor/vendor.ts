import { gql } from 'apollo-server-koa'

export const Vendor = gql`
  type Vendor {
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
