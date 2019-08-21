import { getRepository } from 'typeorm'
import { Worker, Bizplace } from '../../../entities'

export const createWorker = {
  async createWorker(_: any, { worker }, context: any) {
    if (worker.bizplace && worker.bizplace.id) {
      worker.bizplace = await getRepository(Bizplace).findOne(worker.bizplace.id)
    }

    return await getRepository(Worker).save({
      ...worker,
      domain: context.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
