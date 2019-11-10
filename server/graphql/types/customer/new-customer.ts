import gql from 'graphql-tag'

export const NewCustomer = gql`
  input NewCustomer {
    name: String!
    description: String
    bizplace: ObjectRef!
  }
`
