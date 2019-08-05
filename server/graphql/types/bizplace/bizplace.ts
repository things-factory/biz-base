import { gql } from 'apollo-server-koa'

export const Bizplace = gql`
  type Bizplace {
    id: String
    domain: Domain
    contactPoints: [ContactPoint]
    company: Company
    name: String
    description: String
    address: String
    postalCode: String
    latlng: String
    status: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
