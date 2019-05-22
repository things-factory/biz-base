import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const updateCompany = {
  async updateCompany(_, { id, patch }) {
    const repository = getRepository(Company)

    const company = await repository.findOne({ id })

    return await repository.save({
      ...company,
      ...patch
    })
  }
}
