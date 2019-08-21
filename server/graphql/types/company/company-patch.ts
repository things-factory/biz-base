import { gql } from 'apollo-server-koa'

export const CompanyPatch = gql`
  input CompanyPatch {
    id: String
    name: String
    description: String
    countryCode: String
    brn: String
    address: String
    status: String
  }
`
