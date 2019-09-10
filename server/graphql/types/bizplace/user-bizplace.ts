import { gql } from 'apollo-server-koa'

export const UserBizplace = gql`
  type UserBizplace {
    id: String
    name: String
    description: String
    assigned: Boolean
  }
`
