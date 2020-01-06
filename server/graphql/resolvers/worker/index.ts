import { workerResolver } from './worker'
import { workersResolver } from './workers'

import { updateWorker, updateWorkerResolver } from './update-worker'
import { createWorker, createWorkerResolver } from './create-worker'
import { deleteWorker, deleteWorkerResolver } from './delete-worker'
import { deleteWorkers, deleteWorkersResolver } from './delete-workers'
import { updateMultipleWorker } from './update-multiple-worker'

export const Query = {
  ...workersResolver,
  ...workerResolver
}

export const Mutation = {
  ...updateWorkerResolver,
  ...createWorkerResolver,
  ...deleteWorkerResolver,
  ...deleteWorkersResolver,
  ...updateMultipleWorker
}

export { createWorker, deleteWorkers, updateWorker, deleteWorker }
