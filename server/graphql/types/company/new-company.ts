import { gql } from 'apollo-server-koa'

export const NewCompany = gql`
  input NewCompany {
    name: String!
    description: String
    countryCode: String!
    brn: String!
    address: String!
    bizplaces: [String]
    status: String!
  }
`
