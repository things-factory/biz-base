import { gql } from 'apollo-server-koa'

export const NewVendor = gql`
  input NewVendor {
    name: String!
    description: String
    bizplace: BizplacePatch!
  }
`
