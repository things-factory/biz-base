import { EntityManager, getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const deleteCompaniesResolver = {
  async deleteCompanies(_: any, { ids }, _context: any) {
    deleteCompanies(ids)
  }
}

export async function deleteCompanies(ids: string[], trxMgr?: EntityManager) {
  const repository = trxMgr ? trxMgr.getRepository(Company) : getRepository(Company)
  return await repository.delete(ids)
}
