import gql from 'graphql-tag'

export const ContactPoint = gql`
  type ContactPoint {
    id: String
    domain: Domain
    bizplace: Bizplace
    name: String
    address: String
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
