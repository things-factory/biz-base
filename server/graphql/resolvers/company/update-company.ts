import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const updateCompany = {
  async updateCompany(_: any, { name, patch }, context: any) {
    const repository = getRepository(Company)
    const company = await repository.findOne({ name })

    return await repository.save({
      ...company,
      ...patch,
      updater: context.state.user
    })
  }
}
