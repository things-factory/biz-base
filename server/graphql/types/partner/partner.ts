import gql from 'graphql-tag'

export const Partner = gql`
  type Partner {
    id: String
    domainBizplace: Bizplace
    partnerBizplace: Bizplace
    type: String
    requestedAt: String
    approvedAt: String
    requester: User
    approver: User
  }
`
