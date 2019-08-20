import { getRepository } from 'typeorm'
import { Worker, Bizplace } from '../../../entities'

export const createWorker = {
  async createWorker(_: any, { worker }, context: any) {
    return await getRepository(Worker).save({
      domain: context.domain,
      ...worker,
      bizplace: await getRepository(Bizplace).findOne({ where: { name: worker.bizplace } }),
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
