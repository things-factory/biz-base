import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const deleteBizplace = {
  async deleteBizplace(_, { id }) {
    const repository = getRepository(Bizplace)

    return await repository.delete(id)
  }
}
