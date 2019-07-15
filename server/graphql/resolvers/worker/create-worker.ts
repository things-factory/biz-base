import { getRepository } from 'typeorm'
import { Worker } from '../../../entities'

export const createWorker = {
  async createWorker(_: any, { worker }, context: any) {
    return await getRepository(Worker).save({
      domain: context.domain,
      ...worker,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
