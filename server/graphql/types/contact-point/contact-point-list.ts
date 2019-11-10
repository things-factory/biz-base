import gql from 'graphql-tag'

export const ContactPointList = gql`
  type ContactPointList {
    items: [ContactPoint]
    total: Int
  }
`
