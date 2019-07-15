import { gql } from 'apollo-server-koa'

export const VendorPatch = gql`
  input VendorPatch {
    name: String
    description: String
    bizplace: String
  }
`
