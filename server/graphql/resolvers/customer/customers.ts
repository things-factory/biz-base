import { ListParam, buildQuery } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Customer } from '../../../entities'

export const customersResolver = {
  async customers(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Customer).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
