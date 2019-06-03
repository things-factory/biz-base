import { getRepository } from 'typeorm'
import { Worker } from '../../../entities'

export const workerResolver = {
  async worker(_, { id }, context, info) {
    const repository = getRepository(Worker)

    return await repository.findOne(
      { id }
    )
  }
}
