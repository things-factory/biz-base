import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const createCompany = {
  async createCompany(_: any, { company }, context: any) {
    return await getRepository(Company).save({
      ...company,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
