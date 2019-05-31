import { gql } from 'apollo-server-koa'

export const ContactPoint = gql`
  type ContactPoint {
    id: String
    name: String
    description: String
    email: String
  }
`
