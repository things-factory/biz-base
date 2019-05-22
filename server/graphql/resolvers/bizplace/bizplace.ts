import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const bizplaceResolver = {
  async bizplace(_, { name }, context, info) {
    const repository = getRepository(Bizplace)

    return await repository.findOne({ name })
  }
}
