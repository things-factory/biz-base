import { EntityManager, getRepository } from 'typeorm'
import { Worker } from '../../../entities'

export const deleteWorkersResolver = {
  async deleteWorkers(_: any, { ids }, _context: any) {
    deleteWorkers(ids)
  }
}

export async function deleteWorkers(ids: string[], trxMgr?: EntityManager) {
  const repository = trxMgr ? trxMgr.getRepository(Worker) : getRepository(Worker)
  return await repository.delete(ids)
}
