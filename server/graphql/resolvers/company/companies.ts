import { convertListParams, ListParam } from '@things-factory/shell'
import { FindManyOptions, getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const companiesResolver = {
  async companies(_: any, params: ListParam, _context: any) {
    const convertedParams: FindManyOptions<Company> = convertListParams(params)
    const [items, total] = await getRepository(Company).findAndCount({
      ...convertedParams,
      relations: ['domain', 'creator', 'updater']
    })
    return { items, total }
  }
}
