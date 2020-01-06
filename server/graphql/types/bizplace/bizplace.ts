import gql from 'graphql-tag'

export const Bizplace = gql`
  type Bizplace {
    id: String
    domain: Domain
    users: [User]
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
