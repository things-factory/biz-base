import { gql } from 'apollo-server-koa'

export const WorkerList = gql`
  type WorkerList {
    items: [Worker]
    total: Int
  }
`
