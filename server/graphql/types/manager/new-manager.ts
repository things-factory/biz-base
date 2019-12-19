import gql from 'graphql-tag'

export const NewManager = gql`
  input NewManager {
    type: String!
    bizplace: ObjectRef!
    user: ObjectRef!
  }
`
