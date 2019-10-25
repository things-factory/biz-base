import { ListParam } from '@things-factory/shell'
import { getRepository, Not, In } from 'typeorm'
import { Bizplace } from '../../../entities'

export const customerBizplacesResolver = {
  async customerBizplaces(_: any, params: ListParam, context: any) {
    return await getRepository(Bizplace).find({
      where: {
        domain: context.state.domain,
        id: Not(In([context.state.mainBizplace.id]))
      },
      relations: ['domain', 'creator', 'updater']
    })
  }
}
