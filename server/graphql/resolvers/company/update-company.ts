import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const updateCompany = {
  async updateCompany(_: any, { name, patch }, context: any) {
    const company = await getRepository(Company).findOne({ name })

    return await getRepository(Company).save({
      ...company,
      ...patch,
      updater: context.state.user
    })
  }
}
