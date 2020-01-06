import gql from 'graphql-tag'

export const PartnerRoleAssignment = gql`
  type PartnerRoleAssignment {
    id: String
    domainBizplace: Bizplace
    partnerBizplace: Bizplace
    type: String
    requestedAt: String
    approvedAt: String
    requester: User
    approver: User
    assigned: Boolean
  }
`
