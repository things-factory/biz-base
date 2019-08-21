import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const companiesResolver = {
  async companies(_: any, params: ListParam) {
    const queryBuilder = getRepository(Company).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Company.creator', 'Creator')
      .leftJoinAndSelect('Company.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
