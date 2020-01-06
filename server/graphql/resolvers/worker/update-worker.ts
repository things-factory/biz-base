import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Worker } from '../../../entities'

export const updateWorkerResolver = {
  async updateWorker(_: any, { id, patch }, context: any) {
    return await updateWorker(id, patch, context.state.domain, context.state.user)
  }
}

export async function updateWorker(id: string, patch: Worker, domain: Domain, user: any, trxMgr?: EntityManager) {
  const repository: Repository<Worker> = trxMgr ? trxMgr.getRepository(Worker) : getRepository(Worker)
  const worker = await repository.findOne({
    domain,
    id
  })

  return repository.save({
    ...worker,
    ...patch,
    updater: user
  })
}
