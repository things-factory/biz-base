import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const createCompany = {
  async createCompany(_, { company: attrs }) {
    const repository = getRepository(Company)
    const newCompany = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newCompany)
  }
}
