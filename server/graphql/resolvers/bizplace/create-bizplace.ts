import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const createBizplace = {
  async createBizplace(_: any, { bizplace }, context: any) {
    const repository = getRepository(Bizplace)
    if (bizplace.companyId) {
      bizplace.company = await repository.findOne(bizplace.companyId)
      delete bizplace.companyId
    }

    return await repository.save({
      domain: context.domain,
      creator: context.state.user,
      updater: context.state.user,
      ...bizplace
    })
  }
}
