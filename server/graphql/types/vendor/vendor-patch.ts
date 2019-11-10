import gql from 'graphql-tag'

export const VendorPatch = gql`
  input VendorPatch {
    id: String
    name: String
    description: String
    bizplace: ObjectRef
  }
`
