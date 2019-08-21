import { getRepository } from 'typeorm'
import { Bizplace, Company } from '../../../entities'

export const createBizplace = {
  async createBizplace(_: any, { bizplace }, context: any) {
    if (bizplace.company && bizplace.company.id) {
      bizplace.company = await getRepository(Company).findOne(bizplace.company.id)
    }

    return await getRepository(Bizplace).save({
      ...bizplace,
      domain: context.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
