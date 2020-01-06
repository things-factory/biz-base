import { Domain } from 'domain'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Company } from '../../../entities'

export const createCompanyResolver = {
  async createCompany(_: any, { company }, context: any) {
    return await createCompany(company, context.state.domain, context.state.user)
  }
}

export async function createCompany(company: Company, domain: Domain, user: any, trxMgr?: EntityManager) {
  const repository: Repository<Company> = trxMgr ? trxMgr.getRepository(Company) : getRepository(Company)

  return await repository.save({
    ...company,
    domain,
    creator: user,
    updater: user
  })
}
