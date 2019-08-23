import { gql } from 'apollo-server-koa'

export const Worker = gql`
  type Worker {
    id: String
    bizplace: Bizplace
    domain: Domain
    name: String
    type: String
    description: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
