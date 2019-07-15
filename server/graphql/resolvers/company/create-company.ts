import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const createCompany = {
  async createCompany(_: any, { company }, context: any) {
    return await getRepository(Company).save({
      ...company,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
