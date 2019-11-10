import gql from 'graphql-tag'

export const WorkerList = gql`
  type WorkerList {
    items: [Worker]
    total: Int
  }
`
