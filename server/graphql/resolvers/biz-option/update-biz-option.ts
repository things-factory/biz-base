import { getRepository } from 'typeorm'
import { BizOption } from '../../../entities'

export const updateBizOption = {
  async updateBizOption(_: any, { name, patch }, context: any) {
    const repository = getRepository(BizOption)
    const bizOption = await repository.findOne({ 
      where: { domain: context.state.domain, name }
    })

    return await repository.save({
      ...bizOption,
      ...patch,
      updater: context.state.user
    })
  }
}