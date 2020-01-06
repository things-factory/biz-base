import gql from 'graphql-tag'

export const BizOption = gql`
  type BizOption {
    id: String
    name: String
    domain: Domain
    bizplace: Bizplace
    bizOptionDetails: [BizOptionDetail]
    description: String
    updater: User
    creator: User
    updatedAt: String
    createdAt: String
  }
`
