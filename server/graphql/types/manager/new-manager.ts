import gql from 'graphql-tag'

export const NewManager = gql`
  input NewManager {
    type: String!
    refId: String!
    user: ObjectRef!
  }
`
