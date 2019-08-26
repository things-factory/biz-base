import { gql } from 'apollo-server-koa'

export const PartnerList = gql`
  type PartnerList {
    items: [Partner]
    total: Int
  }
`
