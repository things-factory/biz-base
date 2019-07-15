import { gql } from 'apollo-server-koa'

export const BizplacePatch = gql`
  input BizplacePatch {
    parent: String
    name: String
    description: String
    address: String
    postalCode: String
    latlng: String
    state: String
  }
`
