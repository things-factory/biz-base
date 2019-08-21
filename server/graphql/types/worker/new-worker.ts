import { gql } from 'apollo-server-koa'

export const NewWorker = gql`
  input NewWorker {
    bizplace: ObjectRef!
    name: String!
    type: String!
    description: String
  }
`
