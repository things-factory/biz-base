import { gql } from 'apollo-server-koa'

export const NewContactPoint = gql`
  input NewContactPoint {
    bizplace: BizplacePatch!
    name: String!
    email: String!
    fax: String
    phone: String
    description: String
  }
`
