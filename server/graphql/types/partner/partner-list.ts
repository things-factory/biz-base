import gql from 'graphql-tag'

export const PartnerList = gql`
  type PartnerList {
    items: [Partner]
    total: Int
  }
`
