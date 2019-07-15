import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const vendorsResolver = {
  async vendors(_: any, params: ListParam) {
    const queryBuilder = getRepository(Vendor).createQueryBuilder()
    buildQuery(queryBuilder, params)

    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Vendor.domain', 'Domain')
      .leftJoinAndSelect('Vendor.bizplace', 'Bizplace')
      .leftJoinAndSelect('Vendor.creator', 'Creator')
      .leftJoinAndSelect('Vendor.updater', 'Updater')
      .getManyAndCount()
    return { items, total }
  }
}
