import { gql } from 'apollo-server-koa'

export const NewContactPoint = gql`
  input NewContactPoint {
    name: String!
    description: String
  }
`
