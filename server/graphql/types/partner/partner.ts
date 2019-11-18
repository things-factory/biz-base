import gql from 'graphql-tag'

export const Partner = gql`
  type Partner {
    customer: Customer
    customerApproved: Boolean
    vendor: Vendor
    vendorApproved: Boolean
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
