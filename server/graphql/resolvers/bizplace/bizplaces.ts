import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const bizplacesResolver = {
  async bizplaces(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Bizplace).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Bizplace.company', 'Company')
      .leftJoinAndSelect('Bizplace.creator', 'Creator')
      .leftJoinAndSelect('Bizplace.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
