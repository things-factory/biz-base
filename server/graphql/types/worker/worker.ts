import { gql } from 'apollo-server-koa'

export const Worker = gql`
  type Worker {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
