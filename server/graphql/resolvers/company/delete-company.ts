import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const deleteCompany = {
  async deleteCompany(_: any, { id }, _context: any) {
    return await getRepository(Company).delete(id)
  }
}
