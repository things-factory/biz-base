import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const companiesResolver = {
  async companies(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params, context.state.domain.id)

    const [items, total] = await getRepository(Company).findAndCount({
      ...convertedParams,
      relations: ['domain', 'creator', 'updater']
    })
    return { items, total }
  }
}
