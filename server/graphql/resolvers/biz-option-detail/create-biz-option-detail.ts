import { getRepository } from 'typeorm'
import { BizOptionDetail } from '../../../entities'

export const createBizOptionDetail = {
  async createBizOptionDetail(_: any, { bizOptionDetail}, context: any) {
    return await getRepository(BizOptionDetail).save({
      ...bizOptionDetail,
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}

