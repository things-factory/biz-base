import { gql } from 'apollo-server-koa'

export const CompanyList = gql`
  type CompanyList {
    items: [Company]
    total: Int
  }
`
