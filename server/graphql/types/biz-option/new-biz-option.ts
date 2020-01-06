import gql from 'graphql-tag'

export const NewBizOption = gql`
  input NewBizOption {
    name: String!
    description: String
  }
`
