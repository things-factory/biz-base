import gql from 'graphql-tag'

export const NewBizOptionDetail = gql`
  input NewBizOptionDetail {
    name: String!
    description: String
  }
`
