import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Company } from '../../../entities'

export const updateCompanyResolver = {
  async updateCompany(_: any, { name, patch }, context: any) {
    return await updateCompany(name, patch, context.state.domain, context.state.user)
  }
}

export async function updateCompany(name: string, patch: Company, domain: Domain, user: any, trxMgr?: EntityManager) {
  const repository: Repository<Company> = trxMgr ? trxMgr.getRepository(Company) : getRepository(Company)
  const company = await repository.findOne({
    domain,
    name
  })

  return repository.save({
    ...company,
    ...patch,
    updater: user
  })
}
