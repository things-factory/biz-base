import { getMyBizplace } from '../../../utils'
import { Domain } from 'domain'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Worker } from '../../../entities'

export const createWorkerResolver = {
  async createWorker(_: any, { worker }, context: any) {
    return await createWorker(worker, context.state.domain, context.state.user)
  }
}

export async function createWorker(worker: Worker, domain: Domain, user: any, trxMgr?: EntityManager) {
  const repository: Repository<Worker> = trxMgr ? trxMgr.getRepository(Worker) : getRepository(Worker)

  return await repository.save({
    ...worker,
    domain,
    bizplace: await getMyBizplace(user),
    creator: user,
    updater: user
  })
}
