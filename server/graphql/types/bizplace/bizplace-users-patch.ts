import { gql } from 'apollo-server-koa'

export const BizplaceUsersPatch = gql`
  input BizplaceUsersPatch {
    bizplace: ObjectRef
    user: ObjectRef
    mainBizplace: Boolean
  }
`
