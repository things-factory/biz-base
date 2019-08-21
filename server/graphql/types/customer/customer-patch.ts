import { gql } from 'apollo-server-koa'

export const CustomerPatch = gql`
  input CustomerPatch {
    id: String
    name: String
    description: String
    bizplaceId: String
  }
`
