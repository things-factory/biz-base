import gql from 'graphql-tag'

export const Partner = gql`
  type Partner {
    id: String
    domainBizplace: Bizplace
    partnerBizplace: Bizplace
    type: String
    activated: Boolean
    status: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
