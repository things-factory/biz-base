import { EntityManager, getRepository, Repository } from 'typeorm'
import { Worker } from '../../../entities'

export const deleteWorkerResolver = {
  async deleteWorker(_: any, { id }, _context: any) {
    return deleteWorker(id)
  }
}

export async function deleteWorker(id: string, trxMgr?: EntityManager) {
  const repository: Repository<Worker> = trxMgr ? trxMgr.getRepository(Worker) : getRepository(Worker)
  return await repository.delete(id)
}
