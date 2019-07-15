import { gql } from 'apollo-server-koa'

export const ContactPointPatch = gql`
  input ContactPointPatch {
    bizplace: String
    name: String
    email: String
    description: String
  }
`
