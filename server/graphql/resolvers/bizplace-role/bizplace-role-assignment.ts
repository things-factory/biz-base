import { Role } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Bizplace, BizplaceRole } from '../../../entities'
import { roleAssignedPartners } from '../partner/role-assigned-partners'

export const bizplaceRoleAssignmentResolver = {
  async bizplaceRoleAssignment(_: any, { role }, context: any) {
    if (role?.id) {
      role = await getRepository(Role).findOne(role.id)
      return await bizplaceRoleAssignment(role, context.state.domain)
    } else {
      throw new Error('role or role.id is not defined')
    }
  }
}

export async function bizplaceRoleAssignment(role: Role, domain: Domain, trxMgr?: EntityManager) {
  const bizRoleRepo: Repository<BizplaceRole> = trxMgr?.getRepository(BizplaceRole) || getRepository(BizplaceRole)
  const bizplaceRep: Repository<Bizplace> = trxMgr?.getRepository(Bizplace) || getRepository(Bizplace)
  const partners: any = await roleAssignedPartners(role, domain, trxMgr)
  const domainBizplace: Bizplace = await bizplaceRep.findOne({ domain })

  return {
    partners,
    assigned: Boolean(await bizRoleRepo.count({ where: { domain, bizplace: domainBizplace, role } }))
  }
}
