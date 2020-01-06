import gql from 'graphql-tag'

export const AssignedRole = gql`
  type AssignedRole {
    role: Role
    assigned: Boolean
  }
`
