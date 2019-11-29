import { ListParam, convertListParams } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { BizOptionDetail } from '../../../entities'

export const bizOptionDetailsResolver = {
  async bizOptionDetails(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    const [items, total] = await getRepository(BizOptionDetail).findAndCount({
      ...convertedParams,
      relations: ['domain', 'bizOption', 'creator', 'updater']
    })
    return { items, total }
  }
}
