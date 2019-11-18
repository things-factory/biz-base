import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Partner } from '../../../entities'

export const partnerCustomers = {
  async partnerCustomers(_: any, params: ListParam, context: any): Promise<{ items: Partner[]; total: number }> {
    const convertedparams = convertListParams(params)
    const [items, total] = (convertedparams.where.vendor = await getRepository(Partner).findAndCount({
      ...convertedparams,
      relations: ['vendor', 'customer', 'creator', 'updater']
    }))

    return { items, total }
  }
}
