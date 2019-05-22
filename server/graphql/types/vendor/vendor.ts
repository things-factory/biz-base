import { gql } from 'apollo-server-koa'

export const Vendor = gql`
  type Vendor {
    id: String
    name: String
    description: String
  }
`
