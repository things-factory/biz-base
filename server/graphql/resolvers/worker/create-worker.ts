import { getRepository } from 'typeorm'
import { Bizplace, Worker } from '../../../entities'

export const createWorker = {
  async createWorker(_: any, { worker }, context: any) {
    if (worker.bizplace && worker.bizplace.id) {
      worker.bizplace = await getRepository(Bizplace).findOne(worker.bizplace.id)
    } else {
      worker.bizplace = context.state.bizplaces[0]
    }

    return await getRepository(Worker).save({
      ...worker,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
