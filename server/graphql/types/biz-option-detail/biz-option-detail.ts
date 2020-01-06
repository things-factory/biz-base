import gql from 'graphql-tag'

export const BizOptionDetail = gql`
  type BizOptionDetail {
    id: String
    name: String
    domain: Domain
    bizOption: BizOption
    description: String
    updater: User
    creator: User
    updatedAt: String
    createdAt: String
  }
`
