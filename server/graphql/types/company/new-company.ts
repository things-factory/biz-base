import { gql } from 'apollo-server-koa'

export const NewCompany = gql`
  input NewCompany {
    name: String!
    description: String
  }
`
