import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const contactPointsResolver = {
  async contactPoints(_: any, params: ListParam) {
    const queryBuilder = getRepository(ContactPoint).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('ContactPoint.domain', 'Domain')
      .leftJoinAndSelect('ContactPoint.bizplace', 'Bizplace')
      .leftJoinAndSelect('ContactPoint.creator', 'Creator')
      .leftJoinAndSelect('ContactPoint.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
