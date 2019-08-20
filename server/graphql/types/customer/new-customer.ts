import { gql } from 'apollo-server-koa'

export const NewCustomer = gql`
  input NewCustomer {
    name: String!
    description: String
    bizplace: BizplacePatch!
  }
`
