import gql from 'graphql-tag'

export const BizplaceRole = gql`
  type BizplaceRole {
    id: String
    domain: Domain
    bizplace: Bizplace
    role: Role
  }
`
