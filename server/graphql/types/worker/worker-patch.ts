import gql from 'graphql-tag'

export const WorkerPatch = gql`
  input WorkerPatch {
    id: String
    bizplace: ObjectRef
    name: String
    type: String
    description: String
    cuFlag: String
  }
`
