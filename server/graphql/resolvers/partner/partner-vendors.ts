import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Partner } from '../../../entities'

export const partnerVendors = {
  async partnerVendors(_: any, params: ListParam) {
    const queryBuilder = getRepository(Partner).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Partner.creator', 'Creator')
      .leftJoinAndSelect('Partner.updater', 'Updater')
      .andWhere('Partner.customer_id = :customerId', { customerId: params.customer.id })
      .getManyAndCount()

    return { items, total }
  }
}
