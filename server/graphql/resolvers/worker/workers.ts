import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Worker } from '../../../entities'

export const workersResolver = {
  async workers(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Worker).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
