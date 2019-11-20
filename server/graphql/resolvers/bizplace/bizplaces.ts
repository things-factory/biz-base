import { ListParam, convertListParams } from '@things-factory/shell'
import { getRepository, FindManyOptions } from 'typeorm'
import { Bizplace } from '../../../entities'

export const bizplacesResolver = {
  async bizplaces(_: any, params: ListParam, _context: any): Promise<{ items: Bizplace[]; total: number }> {
    const convertedParams: FindManyOptions<Bizplace> = convertListParams(params)
    const [items, total] = await getRepository(Bizplace).findAndCount({
      ...convertedParams,
      relations: ['domain', 'company', 'creator', 'updater']
    })

    return { items, total }
  }
}
