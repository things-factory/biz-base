import { gql } from 'apollo-server-koa'

export const WorkerPatch = gql`
  input WorkerPatch {
    id: String
    bizplaceId: String
    name: String
    type: String
    description: String
  }
`
