import { Role } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Bizplace, BizplaceRole, Partner } from '../../../entities'

export const roleAssignedPartnersResolver = {
  async roleAssignedpartners(_: any, { role }, context: any) {
    if (role?.id) {
      role = await getRepository(Role).findOne(role.id)
      return await roleAssignedpartners(role, context.state.domain)
    }
  }
}

export async function roleAssignedpartners(role: Role, domain: Domain, trxMgr?: EntityManager): Promise<any> {
  const bizplaceRepo: Repository<Bizplace> = trxMgr?.getRepository(Bizplace) || getRepository(Bizplace)
  const partnerRepo: Repository<Partner> = trxMgr?.getRepository(Partner) || getRepository(Partner)
  const bizRoleRepo: Repository<BizplaceRole> = trxMgr?.getRepository(BizplaceRole) || getRepository(BizplaceRole)

  const domainBizplace: Bizplace = await bizplaceRepo.findOne({ where: { domain } })
  const partners: Partner[] = await partnerRepo.find({
    where: { domainBizplace },
    relations: ['domainBizplace', 'partnerBizplace', 'requester', 'approver']
  })

  const bizRoles: BizplaceRole[] = await bizRoleRepo.find({
    where: { domain, role },
    relations: ['bizplace']
  })

  const roleAssignedBizplace: Bizplace[] = bizRoles.map((bizRole: BizplaceRole) => bizRole.bizplace)

  return partners.map((partner: Partner) => {
    return {
      ...partner,
      assigned: roleAssignedBizplace.find(
        (assignedBizplace: Bizplace) => assignedBizplace.id === partner.partnerBizplace.id
      )
        ? true
        : false
    }
  })
}
