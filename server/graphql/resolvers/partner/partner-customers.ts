import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Partner } from '../../../entities'

export const partnerCustomers = {
  async partnerCustomers(_: any, params: ListParam) {
    const queryBuilder = getRepository(Partner).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Partner.creator', 'Creator')
      .leftJoinAndSelect('Partner.updater', 'Updater')
      .andWhere('Partner.vendor_id = :vendorId', { vendorId: params.vendor.id })
      .getManyAndCount()

    return { items, total }
  }
}
