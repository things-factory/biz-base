import { gql } from 'apollo-server-koa'

export const BizplaceList = gql`
  type BizplaceList {
    items: [Bizplace]
    total: Int
  }
`
