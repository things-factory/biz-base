import { gql } from 'apollo-server-koa'

export const ContactPointPatch = gql`
  input ContactPointPatch {
    id: String
    bizplace: ObjectRef
    name: String
    email: String
    fax: String
    phone: String
    description: String
    cuFlag: String
  }
`
