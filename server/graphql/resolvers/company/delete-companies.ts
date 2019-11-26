import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const deleteCompanies = {
  async deleteCompanies(_: any, { ids }, _context: any) {
    await getRepository(Company).delete(ids)
  }
}
