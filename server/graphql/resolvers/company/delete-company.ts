import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const deleteCompany = {
  async deleteCompany(_, { id }) {
    const repository = getRepository(Company)

    return await repository.delete(id)
  }
}
