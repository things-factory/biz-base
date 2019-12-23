import { Role } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Bizplace, BizplaceRole } from '../../../entities'
import { getMyBizplace } from '../../../utils'
import { roleAssignedPartners } from './role-assigned-partners'

export const updateAssignedRoleResolver = {
  async updateAssignedRole(_: any, { role, bizplaces = [], selfAssignment = false }, context: any) {
    if (selfAssignment) {
      bizplaces.push(await getMyBizplace(context.state.user))
    }

    if (role?.id) {
      role = await getRepository(Role).findOne(role.id)
    }

    await updateAssignedRole(role, bizplaces, context.state.domain)
    return await roleAssignedPartners(role, context.state.domain)
  }
}

export async function updateAssignedRole(
  role: Role,
  bizplaces: Bizplace[],
  domain: Domain,
  trxMgr?: EntityManager
): Promise<any> {
  const bizRoleRepo: Repository<BizplaceRole> = trxMgr?.getRepository(BizplaceRole) || getRepository(BizplaceRole)
  // 1. Remove every roles assignment in this domain.
  await bizRoleRepo.delete({
    domain,
    role
  })

  // 2. insert new bizplace roles
  const roleAssignedBizplaces = bizplaces.map((bizplace: Bizplace) => {
    return { domain, bizplace, role }
  })

  await bizRoleRepo.save(roleAssignedBizplaces)
}
