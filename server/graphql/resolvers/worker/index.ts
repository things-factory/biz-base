import { workerResolver } from './worker'
import { workersResolver } from './workers'

import { updateWorker } from './update-worker'
import { createWorker } from './create-worker'
import { deleteWorker } from './delete-worker'

export const Query = {
  ...workersResolver,
  ...workerResolver
}

export const Mutation = {
  ...updateWorker,
  ...createWorker,
  ...deleteWorker
}
