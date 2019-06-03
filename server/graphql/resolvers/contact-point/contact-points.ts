import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const contactPointsResolver = {
  async contactPoints(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(ContactPoint).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
