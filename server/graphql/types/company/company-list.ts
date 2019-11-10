import gql from 'graphql-tag'

export const CompanyList = gql`
  type CompanyList {
    items: [Company]
    total: Int
  }
`
