import { Worker } from './worker'
import { NewWorker } from './new-worker'
import { WorkerPatch } from './worker-patch'
import { WorkerList } from './worker-list'
import { Filter, Pagination, Sorting } from '@things-factory/shell'

export const Mutation = `
  createWorker (
    worker: NewWorker!
  ): Worker

  updateWorker (
    name: String!
    patch: WorkerPatch!
  ): Worker

  deleteWorker (
    name: String!
  ): Worker
`

export const Query = `
  workers(filters: [Filter], pagination: Pagination, sortings: [Sorting]): WorkerList
  worker(id: String!): Worker
`

export const Types = [Filter, Pagination, Sorting, Worker, NewWorker, WorkerPatch, WorkerList]
