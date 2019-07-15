import { gql } from 'apollo-server-koa'

export const Bizplace = gql`
  type Bizplace {
    id: String
    parent: Company
    name: String
    description: String
    address: String
    postalCode: String
    latlng: String
    state: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
