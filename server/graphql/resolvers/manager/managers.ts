import { convertListParams, EntityManager, FindConditions, ListParam, Repository } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Manager } from '../../../entities'

export const managersResolver = {
  async managers(_: any, params: ListParam, _context: any) {
    const convertedParams = convertListParams(params)
    return await managers({ ...convertedParams, relations: ['user', 'bizplace'] })
  }
}

export async function managers(
  params: FindConditions<Manager>,
  trxMgr?: EntityManager
): Promise<{ items: Manager[]; total: number }> {
  const managerRepo: Repository<Manager> = trxMgr?.getRepository(Manager) || getRepository(Manager)
  const [items, total] = await managerRepo.findAndCount(params)
  return {
    items,
    total
  }
}
