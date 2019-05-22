import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const companyResolver = {
  async company(_, { name }, context, info) {
    const repository = getRepository(Company)

    return await repository.findOne({ name })
  }
}
