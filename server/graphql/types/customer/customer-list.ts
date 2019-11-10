import gql from 'graphql-tag'

export const CustomerList = gql`
  type CustomerList {
    items: [Customer]
    total: Int
  }
`
