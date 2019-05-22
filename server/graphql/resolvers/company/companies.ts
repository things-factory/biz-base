import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const companiesResolver = {
  async companies() {
    const repository = getRepository(Company)

    return await repository.find()
  }
}
