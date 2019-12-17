import { User } from '@things-factory/auth-base'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Manager } from '../../../entities'

export const createManagerResolver = {
  async createManager(_: any, { manager }, _context: any) {
    return await createManager(manager)
  }
}

export async function createManager(manager: Manager, trxMgr?: EntityManager): Promise<Manager> {
  const managerRepo: Repository<Manager> = trxMgr?.getRepository(Manager) || getRepository(Manager)
  const userRepo: Repository<User> = trxMgr?.getRepository(User) || getRepository(User)

  if (manager?.user?.id) {
    manager.user = await userRepo.findOne(manager.user.id)
  }

  return await managerRepo.save({
    ...manager
  })
}
