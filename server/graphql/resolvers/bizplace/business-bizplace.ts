import { ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'
import { getMyBizplace } from '../../../utils'

export const businessBizplaceResolver = {
  async businessBizplace(_: any, params: ListParam, context: any) {
    const myBizplace: Bizplace = await getMyBizplace(context.state.user)
    return await getRepository(Bizplace).findOne({
      where: { id: myBizplace.id },
      relations: ['company', 'domain', 'users', 'creator', 'updater']
    })
  }
}
