import gql from 'graphql-tag'

export const BizplaceRoleList = gql`
  type BizplaceRoleList {
    items: [BizplaceRole]
    total: Int
  }
`
