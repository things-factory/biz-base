import gql from 'graphql-tag'

export const VendorList = gql`
  type VendorList {
    items: [Vendor]
    total: Int
  }
`
