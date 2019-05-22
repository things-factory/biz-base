import { gql } from 'apollo-server-koa'

export const ContactPointPatch = gql`
  input ContactPointPatch {
    name: String
    description: String
  }
`
