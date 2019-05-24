import { gql } from 'apollo-server-koa'

export const Company = gql`
  type Company {
    id: String
    name: String
    description: String
    countryCode: String
    address: String
    brn: String
    bizplaces: [Bizplace]
    state: String
  }
`
