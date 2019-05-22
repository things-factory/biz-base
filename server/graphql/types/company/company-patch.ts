import { gql } from 'apollo-server-koa'

export const CompanyPatch = gql`
  input CompanyPatch {
    name: String
    description: String
  }
`
