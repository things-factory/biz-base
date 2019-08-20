import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const updateBizplace = {
  async updateBizplace(_: any, { name, patch }, context: any) {
    const repository = getRepository(Bizplace)
    const bizplace = await repository.findOne({ name })

    return await repository.save({
      ...bizplace,
      ...patch,
      updater: context.state.user
    })
  }
}
