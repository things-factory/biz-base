import gql from 'graphql-tag'

export const ManagerPatch = gql`
  input ManagerPatch {
    id: String
    type: String
    refId: String
    user: ObjectRef
  }
`
