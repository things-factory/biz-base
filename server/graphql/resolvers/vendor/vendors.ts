import { buildQuery, ListParams } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const vendorsResolver = {
  async vendors(_: any, params: ListParams, context: any) {
    const queryBuilder = getRepository(Vendor).createQueryBuilder()
    buildQuery(queryBuilder, params)

    const [items, total] = await queryBuilder.getManyAndCount()
    return { items, total }
  }
}
