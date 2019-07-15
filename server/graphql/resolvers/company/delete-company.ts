import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const deleteCompany = {
  async deleteCompany(_: any, { name }) {
    return await getRepository(Company).delete({ name })
  }
}
