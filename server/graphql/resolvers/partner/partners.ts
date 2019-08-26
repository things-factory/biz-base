import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Partner } from '../../../entities'

export const partnersResolver = {
  async partners(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Partner).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Customer.domain', 'Domain')
      .leftJoinAndSelect('Customer.customer', 'Customer')
      .leftJoinAndSelect('Customer.vendor', 'Vendor')
      .leftJoinAndSelect('Customer.creator', 'Creator')
      .leftJoinAndSelect('Customer.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
