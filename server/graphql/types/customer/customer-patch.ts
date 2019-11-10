import gql from 'graphql-tag'

export const CustomerPatch = gql`
  input CustomerPatch {
    id: String
    name: String
    description: String
    bizplace: ObjectRef
  }
`
