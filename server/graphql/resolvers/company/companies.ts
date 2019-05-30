import { listQueryBuilder, ListParams } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const companiesResolver = {
  async companies(_: any, params: ListParams, context: any, args: any) {
    const queryBuilder = getRepository(Company).createQueryBuilder()
    listQueryBuilder(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
