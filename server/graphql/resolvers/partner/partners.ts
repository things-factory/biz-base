import { convertListParams, ListParam } from '@things-factory/shell'
import { Partner } from 'server/entities'
import { getRepository } from 'typeorm'
import { checkUserBelongsDomain } from '../../../utils/check-user-belongs-domain'

export const partnersResolver = {
  async partners(_: any, params: ListParam, context: any): Promise<{ items: Array<Partner>; total: number } | void> {
    if (checkUserBelongsDomain(context.state.domain, context.state.user)) {
      const convertedParams = convertListParams(params)
      convertedParams.where.domainBizplace = context.state.domain

      const [items, total] = await getRepository(Partner).findAndCount({
        ...convertedParams,
        relations: ['domainBizplace', 'partnerBizplace', 'creator', 'updater']
      })

      return { items, total }
    } else {
      throw new Error(`User doesn't blong in current domain`)
    }
  }
}
