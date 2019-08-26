import { gql } from 'apollo-server-koa'

export const NewPartner = gql`
  input NewPartner {
    name: String!
    description: String
  }
`
