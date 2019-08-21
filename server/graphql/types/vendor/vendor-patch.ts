import { gql } from 'apollo-server-koa'

export const VendorPatch = gql`
  input VendorPatch {
    id: String
    name: String
    description: String
    bizplaceId: String
  }
`
