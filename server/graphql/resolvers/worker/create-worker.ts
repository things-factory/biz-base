import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { Worker } from '../../../entities'

export const createWorker = {
  async createWorker(_, { worker: attrs }) {
    const repository = getRepository(Worker)
    const newWorker = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newWorker)
  }
}
