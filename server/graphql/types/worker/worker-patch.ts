import { gql } from 'apollo-server-koa'

export const WorkerPatch = gql`
  input WorkerPatch {
    name: String
    type: String
    description: String
  }
`
