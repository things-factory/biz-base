import gql from 'graphql-tag'

export const BizplaceUsersPatch = gql`
  input BizplaceUsersPatch {
    bizplace: ObjectRef
    user: ObjectRef
    mainBizplace: Boolean
  }
`
