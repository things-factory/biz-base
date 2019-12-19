import { EntityManager, getRepository, Repository } from 'typeorm'
import { Manager } from '../../../entities'

export const managerResolver = {
  async manager(_: any, { id }, _context: any) {
    return await manager(id)
  }
}

export async function manager(id: string, trxMgr?: EntityManager): Promise<Manager> {
  const managerRepo: Repository<Manager> = trxMgr?.getRepository(Manager) || getRepository(Manager)
  return await managerRepo.findOne({
    where: { id },
    relations: ['user', 'bizplace']
  })
}
