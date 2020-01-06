import { getRepository } from 'typeorm'
import { BizOptionDetail } from '../../../entities'

export const updateBizOptionDetail = {
  async updateBizOptionDetail(_: any, { name, patch }, context: any) {
    const repository = getRepository(BizOptionDetail)
    const bizOptionDetail = await repository.findOne({ 
      where: { domain: context.state.domain, name }
    })

    return await repository.save({
      ...bizOptionDetail,
      ...patch,
      updater: context.state.user
    })
  }
}