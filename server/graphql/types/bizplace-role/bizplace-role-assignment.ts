import gql from 'graphql-tag'

export const BizplaceRoleAssignment = gql`
  type BizplaceRoleAssignment {
    partners: [PartnerRoleAssignment]
    assigned: Boolean
  }
`
