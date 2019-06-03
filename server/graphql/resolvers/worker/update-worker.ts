import { getRepository } from 'typeorm'
import { Worker } from '../../../entities'

export const updateWorker = {
  async updateWorker(_, { id, patch }) {
    const repository = getRepository(Worker)

    const worker = await repository.findOne({ id })

    return await repository.save({
      ...worker,
      ...patch
    })
  }
}
