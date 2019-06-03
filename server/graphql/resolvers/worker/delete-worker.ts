import { getRepository } from 'typeorm'
import { Worker } from '../../../entities'

export const deleteWorker = {
  async deleteWorker(_, { id }) {
    const repository = getRepository(Worker)

    return await repository.delete(id)
  }
}
