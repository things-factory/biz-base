import { User } from '@things-factory/auth-base'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Bizplace, Manager } from '../../../entities'

export const updateManagerResolver = {
  async updateManager(_: any, { id, patch }, context: any) {
    return await updateManager(id, patch)
  }
}

export async function updateManager(id: string, patch: Manager, trxMgr?: EntityManager): Promise<Manager> {
  const managerRepo: Repository<Manager> = trxMgr?.getRepository(Manager) || getRepository(Manager)
  const bizplaceRepo: Repository<Bizplace> = trxMgr?.getRepository(Bizplace) || getRepository(Bizplace)
  const userRepo: Repository<User> = trxMgr?.getRepository(User) || getRepository(User)

  const manager = await managerRepo.findOne({
    where: { id },
    relations: ['user', 'bizplace']
  })

  if (patch?.bizplace?.id) {
    patch.user = await bizplaceRepo.findOne(patch.bizplace.id)
  }

  if (patch?.user?.id) {
    patch.user = await userRepo.findOne(patch.user.id)
  }

  return await managerRepo.save({
    ...manager,
    ...patch
  })
}
