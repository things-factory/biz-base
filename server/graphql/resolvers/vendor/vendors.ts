import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const vendorsResolver = {
  async vendors(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Vendor).createQueryBuilder()
    buildQuery(queryBuilder, params, context)

    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Vendor.domain', 'Domain')
      .leftJoinAndSelect('Vendor.bizplace', 'Bizplace')
      .leftJoinAndSelect('Vendor.creator', 'Creator')
      .leftJoinAndSelect('Vendor.updater', 'Updater')
      .getManyAndCount()
    return { items, total }
  }
}
