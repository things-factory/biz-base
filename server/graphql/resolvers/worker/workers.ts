import { convertListParams, ListParam } from '@things-factory/shell'
import { getPermittedBizplaceIds } from '../../../utils'
import { getRepository, In } from 'typeorm'
import { Worker } from '../../../entities'

export const workersResolver = {
  async workers(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    convertedParams.where.bizplace = In(await getPermittedBizplaceIds(context.state.domain, context.state.user))
    const [items, total] = await getRepository(Worker).findAndCount({
      ...convertedParams,
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })

    return { items, total }
  }
}
