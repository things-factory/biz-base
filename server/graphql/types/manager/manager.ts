import gql from 'graphql-tag'

export const Manager = gql`
  type Manager {
    id: String
    type: String
    bizplace: Bizplace
    user: User
  }
`
