import { getRepository, In } from 'typeorm'
import { Company } from '../../../entities'

export const deleteCompanies = {
  async deleteCompanies(_: any, { ids }) {
    await getRepository(Company).delete(ids)
  }
}
