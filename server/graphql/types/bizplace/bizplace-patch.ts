import { gql } from 'apollo-server-koa'

export const BizplacePatch = gql`
  input BizplacePatch {
    company: String
    name: String
    description: String
    address: String
    postalCode: String
    latlng: String
    status: String
  }
`
