import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Customer } from '../../../entities'

export const customersResolver = {
  async customers(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Customer).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Customer.domain', 'Domain')
      .leftJoinAndSelect('Customer.bizplace', 'Bizplace')
      .leftJoinAndSelect('Customer.creator', 'Creator')
      .leftJoinAndSelect('Customer.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
