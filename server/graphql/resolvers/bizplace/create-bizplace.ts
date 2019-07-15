import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const createBizplace = {
  async createBizplace(_: any, { bizplace }, context: any) {
    return await getRepository(Bizplace).save({
      creatorId: context.state.user.id,
      updaterId: context.state.user.id,
      ...bizplace
    })
  }
}
