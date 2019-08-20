import { gql } from 'apollo-server-koa'

export const BizplacePatch = gql`
  input BizplacePatch {
    id: String
    company: CompanyPatch
    name: String
    description: String
    address: String
    postalCode: String
    latlng: String
    status: String
    cuFlag: String
  }
`
