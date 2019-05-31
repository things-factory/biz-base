import { gql } from 'apollo-server-koa'

export const VendorList = gql`
  type VendorList {
    items: [Vendor]
    total: Int
  }
`
