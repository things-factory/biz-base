import { Worker } from './worker'
import { NewWorker } from './new-worker'
import { WorkerPatch } from './worker-patch'
import { WorkerList } from './worker-list'
import { directivePriviledge } from '@things-factory/auth-base'

export const Mutation = `
  createWorker (
    worker: NewWorker!
  ): Worker @priviledge(priviledge: "mutation")

  updateWorker (
    name: String!
    patch: WorkerPatch!
  ): Worker @priviledge(category: "worker", priviledge: "mutation")

  updateMultipleWorker (
    patches: [WorkerPatch]!
  ): [Worker] @priviledge(category: "worker", priviledge: "mutation")

  deleteWorker (
    name: String!
  ): Boolean @priviledge(category: "worker", priviledge: "mutation")

  deleteWorkers (
    names: [String]!
  ): Boolean @priviledge(category: "worker", priviledge: "mutation")
`

export const Query = `
  workers(filters: [Filter], pagination: Pagination, sortings: [Sorting]): WorkerList @priviledge(category: "worker", priviledge: "query")
  worker(name: String!): Worker @priviledge(category: "worker", priviledge: "query")
`

export const Types = [Worker, NewWorker, WorkerPatch, WorkerList]
