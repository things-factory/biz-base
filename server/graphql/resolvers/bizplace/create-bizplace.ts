import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const createBizplace = {
  async createBizplace(_, { bizplace: attrs }) {
    const repository = getRepository(Bizplace)
    const newBizplace = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newBizplace)
  }
}
