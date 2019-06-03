import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const vendorsResolver = {
  async vendors(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Vendor).createQueryBuilder()
    buildQuery(queryBuilder, params)

    const [items, total] = await queryBuilder.getManyAndCount()
    return { items, total }
  }
}
