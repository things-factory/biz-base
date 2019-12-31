import gql from 'graphql-tag'

export const NewContactPoint = gql`
  input NewContactPoint {
    bizplace: ObjectRef!
    name: String!
    email: String!
    address: String
    fax: String
    phone: String
    description: String
  }
`
