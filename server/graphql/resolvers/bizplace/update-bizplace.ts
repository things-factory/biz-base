import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const updateBizplace = {
  async updateBizplace(_, { id, patch }) {
    const repository = getRepository(Bizplace)

    const bizplace = await repository.findOne({ id })

    return await repository.save({
      ...bizplace,
      ...patch
    })
  }
}
