import gql from 'graphql-tag'

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
