import { EntityManager, getRepository, Repository } from 'typeorm'
import { Company } from '../../../entities'

export const deleteCompanyResolver = {
  async deleteCompany(_: any, { id }, _context: any) {
    return deleteCompany(id)
  }
}

export async function deleteCompany(id: string, trxMgr?: EntityManager) {
  const repository: Repository<Company> = trxMgr ? trxMgr.getRepository(Company) : getRepository(Company)
  return await repository.delete(id)
}
