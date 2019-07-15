import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const bizplacesResolver = {
  async bizplaces(_: any, params: ListParam) {
    const queryBuilder = getRepository(Bizplace).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Bizplace.creator', 'Creator')
      .leftJoinAndSelect('Bizplace.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
