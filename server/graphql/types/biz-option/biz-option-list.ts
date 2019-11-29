import gql from 'graphql-tag'

export const BizOptionList = gql`
  type BizOptionList {
    items: [BizOption]
    total: Int
  }
`
