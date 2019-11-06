import { buildQuery, ListParam, convertListParams } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const contactPointsResolver = {
  async contactPoints(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    let [items, total] = await getRepository(ContactPoint).findAndCount({
      ...convertedParams,
      relations: ['domain', 'creator', 'updater', 'bizplace']
    })

    return { items, total }
  }
}
