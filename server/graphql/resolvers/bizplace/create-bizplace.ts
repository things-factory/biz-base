import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const createBizplace = {
  async createBizplace(_: any, { bizplace }, context: any) {
    return await getRepository(Bizplace).save({
      domain: context.domain,
      creator: context.state.user,
      updater: context.state.user,
      ...bizplace,
      company: { ...bizplace.company }
    })
  }
}
