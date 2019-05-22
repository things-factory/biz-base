import { gql } from 'apollo-server-koa'

export const BizplacePatch = gql`
  input BizplacePatch {
    name: String
    description: String
  }
`
