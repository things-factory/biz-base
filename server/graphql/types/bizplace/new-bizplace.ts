import { gql } from 'apollo-server-koa'

export const NewBizplace = gql`
  input NewBizplace {
    name: String!
    description: String
  }
`
