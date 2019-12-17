import { EntityManager, getRepository, Repository } from 'typeorm'
import { Manager } from '../../../entities'

export const deleteManagerResolver = {
  async deleteManager(_: any, { id }, _context: any) {
    await deleteManager(id)
  }
}

export async function deleteManager(id: string, trxMgr?: EntityManager): Promise<void> {
  const managerRepo: Repository<Manager> = trxMgr?.getRepository(Manager) || getRepository(Manager)
  await managerRepo.delete(id)
}
