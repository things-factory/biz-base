import { Worker } from './worker'
import { NewWorker } from './new-worker'
import { WorkerPatch } from './worker-patch'
import { WorkerList } from './worker-list'

export const Mutation = `
  createWorker (
    worker: NewWorker!
  ): Worker @priviledge(priviledge: "mutation")

  updateWorker (
    name: String!
    patch: WorkerPatch!
  ): Worker @priviledge(priviledge: "mutation")

  updateMultipleWorker (
    patches: [WorkerPatch]!
  ): [Worker] @priviledge(priviledge: "mutation")

  deleteWorker (
    name: String!
  ): Boolean @priviledge(priviledge: "mutation")

  deleteWorkers (
    names: [String]!
  ): Boolean @priviledge(priviledge: "mutation")
`

export const Query = `
  workers(filters: [Filter], pagination: Pagination, sortings: [Sorting]): WorkerList @priviledge(priviledge: "query")
  worker(name: String!): Worker @priviledge(priviledge: "query")
`

export const Types = [Worker, NewWorker, WorkerPatch, WorkerList]
