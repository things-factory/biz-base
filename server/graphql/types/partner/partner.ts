import gql from 'graphql-tag'

export const Partner = gql`
  type Partner {
    customer: Customer
    vendor: Vendor
  }
`
