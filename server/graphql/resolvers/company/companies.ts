import { getRepository } from 'typeorm'
import { Company } from '../../../entities'
import { conditionBuilder } from './query-builder'

export const companiesResolver = {
  async companies(_: any, params: { filters: any }, context: any, args: any) {
    const queryBuilder = getRepository(Company).createQueryBuilder()

    const filters = params.filters

    if (filters && filters.length > 0) {
      filters.forEach((filter: { name: string; operator: string; value: any }, index: number) => {
        const condition = conditionBuilder(filter.name, filter.operator, filter.value)
        if (index === 0) {
          queryBuilder.where(condition.clause, condition.parameters)
        } else {
          queryBuilder.andWhere(condition.clause, condition.parameters)
        }
      })
    }
    const [items, total] = await queryBuilder.getManyAndCount()

    return {
      items,
      total
    }
  }
}
