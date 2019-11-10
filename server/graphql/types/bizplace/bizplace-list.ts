import gql from 'graphql-tag'

export const BizplaceList = gql`
  type BizplaceList {
    items: [Bizplace]
    total: Int
  }
`
