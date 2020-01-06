import { Role } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { EntityManager, getManager, getRepository, Repository } from 'typeorm'
import { Bizplace, BizplaceRole } from '../../../entities'
import { getMyBizplace } from '../../../utils'
import { bizplaceRoleAssignment } from '../bizplace-role'

export const updateAssignedRoleResolver = {
  async updateAssignedRole(_: any, { role, bizplaces = [], selfAssignment = false }, context: any) {
    return await getManager().transaction(async (trxMgr: EntityManager) => {
      if (selfAssignment) {
        bizplaces.push(await getMyBizplace(context.state.user))
      }

      if (bizplaces?.length) {
        bizplaces = await Promise.all(
          bizplaces.map(async (bizplace: any) => {
            return await trxMgr.getRepository(Bizplace).findOne(bizplace.id)
          })
        )
      }

      if (role?.id) {
        role = await trxMgr.getRepository(Role).findOne(role.id)
      }

      await updateAssignedRole(role, bizplaces, context.state.domain, trxMgr)
      return await bizplaceRoleAssignment(role, context.state.domain, trxMgr)
    })
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
