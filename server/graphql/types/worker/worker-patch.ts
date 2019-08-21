import { gql } from 'apollo-server-koa'

export const WorkerPatch = gql`
  input WorkerPatch {
    id: String
    bizplace: ObjectRef
    name: String
    type: String
    description: String
  }
`
