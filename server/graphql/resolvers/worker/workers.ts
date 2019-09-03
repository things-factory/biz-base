import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository, In } from 'typeorm'
import { Bizplace, Worker } from '../../../entities'

export const workersResolver = {
  async workers(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    convertedParams.where.bizplace = In(context.state.bizplaces.map((bizplace: Bizplace) => bizplace.id))
    const [items, total] = await getRepository(Worker).findAndCount({
      ...convertedParams,
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })

    return { items, total }
  }
}
