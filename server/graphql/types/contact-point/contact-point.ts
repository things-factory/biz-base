import { gql } from 'apollo-server-koa'

export const ContactPoint = gql`
  type ContactPoint {
    id: String
    domain: Domain
    bizplace: Bizplace
    name: String
    email: String
    fax: String
    phone: String
    description: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
