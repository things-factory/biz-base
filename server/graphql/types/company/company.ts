import gql from 'graphql-tag'

export const Company = gql`
  type Company {
    id: String
    name: String
    description: String
    countryCode: String
    postalCode: String
    brn: String
    address: String
    bizplaces: [Bizplace]
    status: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
