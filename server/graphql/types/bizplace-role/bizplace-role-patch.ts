import gql from 'graphql-tag'

export const BizplaceRolePatch = gql`
  input BizplaceRolePatch {
    bizplace: ObjectRef
    role: ObjectRef
  }
`
