import { gql } from 'apollo-server-koa'

export const NewWorker = gql`
  input NewWorker {
    name: String!
    type: String!
    description: String
  }
`
