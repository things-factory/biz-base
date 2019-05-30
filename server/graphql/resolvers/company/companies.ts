import { conditionBuilder, Filter, Pagination } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const companiesResolver = {
  async companies(_: any, params: { filters: Array<Filter>; pagination: Pagination }, context: any, args: any) {
    const queryBuilder = getRepository(Company).createQueryBuilder()

    const filters = params.filters
    const pagination = params.pagination

    if (filters && filters.length > 0) {
      filters.forEach((filter, index: number) => {
        const condition = conditionBuilder(filter.name, filter.operator, filter.value)
        if (index === 0) {
          queryBuilder.where(condition.clause)
          if (condition.parameters) queryBuilder.setParameters(condition.parameters)
        } else {
          queryBuilder.andWhere(condition.clause)
          if (condition.parameters) queryBuilder.setParameters(condition.parameters)
        }
      })
    }

    if (pagination && pagination.skip && pagination.take) {
      queryBuilder.skip(pagination.skip)
      queryBuilder.take(pagination.take)
    }

    const [items, total] = await queryBuilder.getManyAndCount()

    return {
      items,
      total
    }
  }
}
