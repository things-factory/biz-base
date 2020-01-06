import { ListParam } from '@things-factory/shell'
import { getRepository, Not, In } from 'typeorm'
import { Bizplace } from '../../../entities'
import { getMyBizplace } from '../../../utils'

export const customerBizplacesResolver = {
  async customerBizplaces(_: any, params: ListParam, context: any) {
    return await getRepository(Bizplace).find({
      where: {
        domain: context.state.domain,
        id: Not(In([await getMyBizplace(context.state.user)]))
      },
      relations: ['domain', 'creator', 'updater']
    })
  }
}
