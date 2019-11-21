import { convertListParams, ListParam } from '@things-factory/shell'
import { Partner, Bizplace } from '../../../entities'
import { getRepository } from 'typeorm'
import { checkUserBelongsDomain } from '../../../utils/check-user-belongs-domain'

export const partnersResolver = {
  async partners(_: any, params: ListParam, context: any): Promise<{ items: Array<Partner>; total: number } | void> {
    if (await checkUserBelongsDomain(context.state.domain, context.state.user)) {
      const convertedParams = convertListParams(params)
      convertedParams.where.domainBizplace = await getRepository(Bizplace).findOne({
        where: { domain: context.state.domain }
      })

      const [items, total] = await getRepository(Partner).findAndCount({
        ...convertedParams,
        relations: ['domainBizplace', 'partnerBizplace', 'requester', 'approver']
      })

      return { items, total }
    } else {
      throw new Error(`User doesn't blong in current domain`)
    }
  }
}
