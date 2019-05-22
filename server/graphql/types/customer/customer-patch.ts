import { gql } from 'apollo-server-koa'

export const CustomerPatch = gql`
  input CustomerPatch {
    name: String
    description: String
  }
`
