import { EntityManager, getRepository, Repository } from 'typeorm'
import { Manager } from '../../../entities'

export const deleteManagersResolver = {
  async deleteManagers(_: any, { ids }, _context: any) {
    await deleteManagers(ids)
  }
}

export async function deleteManagers(ids: string[], trxMgr?: EntityManager): Promise<void> {
  const managerRepo: Repository<Manager> = trxMgr?.getRepository(Manager) || getRepository(Manager)
  await managerRepo.delete(ids)
}
