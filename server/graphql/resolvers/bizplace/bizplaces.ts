import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository, In } from 'typeorm'
import { Bizplace } from '../../../entities'

export const bizplacesResolver = {
  async bizplaces(_: any, params: ListParam, context: any) {
    let bizplace_ids = []
    let bizplaceIndex = params.filters.findIndex(x => x.name === 'bizplace')
    if (bizplaceIndex > -1) {
      bizplace_ids = params.filters
        .filter(x => x.name === 'bizplace')
        .map(item => {
          return item.value
        })
      params.filters.splice(bizplaceIndex, 1)
    }

    const convertedParams = convertListParams(params)

    if (!(bizplace_ids.length > 0))
      convertedParams.where.id = In(context.state.bizplaces.map((bizplace: Bizplace) => bizplace.id))
    else convertedParams.where.id = In(bizplace_ids)

    const [items, total] = await getRepository(Bizplace).findAndCount({
      ...convertedParams,
      relations: ['domain', 'company', 'users', 'creator', 'updater']
    })

    return { items, total }
  }
}
