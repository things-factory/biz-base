import gql from 'graphql-tag'

export const NewVendor = gql`
  input NewVendor {
    name: String!
    description: String
    bizplace: ObjectRef!
  }
`
