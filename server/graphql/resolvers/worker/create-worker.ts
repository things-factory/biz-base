import { getRepository } from 'typeorm'
import { Worker, Bizplace } from '../../../entities'
import { getUserBizplaces } from '../../../index'

export const createWorker = {
  async createWorker(_: any, { worker }, context: any) {
    if (worker.bizplace && worker.bizplace.id) {
      worker.bizplace = await getRepository(Bizplace).findOne(worker.bizplace.id)
    } else {
      const userBizplaces = await getUserBizplaces(context)
      worker.bizplace = userBizplaces[0]
    }

    return await getRepository(Worker).save({
      ...worker,
      domain: context.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
