import { getRepository } from 'typeorm'
import { Worker } from '../../../entities'

export const updateWorker = {
  async updateWorker(_: any, { name, patch }, context: any) {
    const repository = getRepository(Worker)
    const worker = await repository.findOne({ domain: context.domain, name })

    return await repository.save({
      ...worker,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
