import { getRepository } from 'typeorm'
import { Worker, Bizplace } from '../../../entities'

export const updateWorker = {
  async updateWorker(_: any, { name, patch }, context: any) {
    const worker = await getRepository(Worker).findOne({ domain: context.domain, name })

    if (patch.bizplace && patch.bizplace.id) {
      worker.bizplace = await getRepository(Bizplace).findOne(patch.bizplace.id)
    }

    return await getRepository(Worker).save({
      ...worker,
      ...patch,
      updater: context.state.user
    })
  }
}
