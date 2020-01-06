import gql from 'graphql-tag'

export const BizOptionDetailList = gql`
  type BizOptionDetailList {
    items: [BizOptionDetail]
    total: Int
  }
`
