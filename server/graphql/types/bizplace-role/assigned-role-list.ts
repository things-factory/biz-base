import gql from 'graphql-tag'

export const AssignedRoleList = gql`
  type AssignedRoleList {
    items: [AssignedRole]
    total: Int
  }
`
