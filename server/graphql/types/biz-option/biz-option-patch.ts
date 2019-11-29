import gql from 'graphql-tag'

export const BizOptionPatch = gql`
  input BizOptionPatch {
    id: String
    name: String
    description: String
    bizplace: ObjectRef
    bizOptionDetails: [ObjectRef]
    cuFlag: String
  }
`
