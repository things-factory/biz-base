import { gql } from 'apollo-server-koa'

export const Company = gql`
  type Company {
    id: String
    name: String
    description: String
    countryCode: String
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
