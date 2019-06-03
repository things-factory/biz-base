import { gql } from 'apollo-server-koa'

export const NewWorker = gql`
  input NewWorker {
    name: String!
    description: String
  }
`
