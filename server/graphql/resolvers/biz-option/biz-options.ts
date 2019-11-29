import { ListParam, convertListParams } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { BizOption } from '../../../entities'

export const bizOptionsResolver = {
  async bizOptions(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    const [items, total] = await getRepository(BizOption).findAndCount({
      ...convertedParams,
      relations: ['domain', 'bizplace', 'bizOptionDetails', 'creator', 'updater']
    })
    return { items, total }
  }
}
