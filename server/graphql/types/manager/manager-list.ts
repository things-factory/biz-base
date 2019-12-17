import gql from 'graphql-tag'

export const ManagerList = gql`
  type ManagerList {
    items: [Manager]
    total: Int
  }
`
