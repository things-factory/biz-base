import { gql } from 'apollo-server-koa'

export const Partner = gql`
  type Partner {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
