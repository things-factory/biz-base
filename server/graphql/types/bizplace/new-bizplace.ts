import { gql } from 'apollo-server-koa'

export const NewBizplace = gql`
  input NewBizplace {
    parent: String!
    name: String!
    description: String
    address: String!
    postalCode: String!
    latlng: String!
    state: String
  }
`
