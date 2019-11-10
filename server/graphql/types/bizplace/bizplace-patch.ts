import gql from 'graphql-tag'

export const BizplacePatch = gql`
  input BizplacePatch {
    id: String
    company: ObjectRef
    name: String
    description: String
    address: String
    postalCode: String
    latlng: String
    status: String
    cuFlag: String
  }
`
