import { getRepository } from 'typeorm'
import { BizOption } from '../../../entities'

export const createBizOption = {
  async createBizOption(_: any, { bizOption}, context: any) {
    return await getRepository(BizOption).save({
      ...bizOption,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}

