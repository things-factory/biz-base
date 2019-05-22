import { gql } from 'apollo-server-koa'

export const Bizplace = gql`
  type Bizplace {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
