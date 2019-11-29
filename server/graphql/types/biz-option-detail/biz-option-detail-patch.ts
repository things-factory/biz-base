import gql from 'graphql-tag'

export const BizOptionDetailPatch = gql`
  input BizOptionDetailPatch {
    id: String
    name: String
    description: String
    bizOption: ObjectRef
  }
`
