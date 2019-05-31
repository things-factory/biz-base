import { gql } from 'apollo-server-koa'

export const ContactPointList = gql`
  type ContactPointList {
    items: [ContactPoint]
    total: Int
  }
`
