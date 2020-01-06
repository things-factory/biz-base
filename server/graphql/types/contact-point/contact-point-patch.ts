import gql from 'graphql-tag'

export const ContactPointPatch = gql`
  input ContactPointPatch {
    id: String
    bizplace: ObjectRef
    name: String
    address: String
    email: String
    fax: String
    phone: String
    description: String
    cuFlag: String
  }
`
