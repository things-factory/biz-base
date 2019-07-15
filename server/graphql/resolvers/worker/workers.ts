import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Worker } from '../../../entities'

export const workersResolver = {
  async workers(_: any, params: ListParam) {
    const queryBuilder = getRepository(Worker).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Woerker.domain', 'Domain')
      .leftJoinAndSelect('Woerker.creator', 'Creator')
      .leftJoinAndSelect('Woerker.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
