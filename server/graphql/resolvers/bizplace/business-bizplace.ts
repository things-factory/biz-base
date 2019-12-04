import { ListParam } from '@things-factory/shell'
import { getRepository, In } from 'typeorm'
import { Bizplace } from '../../../entities'

export const businessBizplaceResolver = {
  async businessBizplace(_: any, params: ListParam, context: any) {
    return await getRepository(Bizplace).findOne({
      where: { domain: context.state.domain, id: In([context.state.mainBizplace.id]) },
      relations: ['company', 'domain', 'users', 'creator', 'updater']
    })
  }
}
