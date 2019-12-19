import { Role } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository } from 'typeorm'
import { Bizplace, BizplaceRole } from '../../../entities'

export const rolesByBizplaceResolver = {
  async rolesByBizplace(_: any, { bizplace }, context: any) {
    return await rolesByBizplace(context.state.domain, bizplace)
  }
}

export async function rolesByBizplace(domain: Domain, bizplace: any, trxMgr?: EntityManager): Promise<Role[]> {
  const bizplaceRoleRepo = (trxMgr && trxMgr.getRepository(BizplaceRole)) || getRepository(BizplaceRole)
  const bizplaceRepo = (trxMgr && trxMgr.getRepository(Bizplace)) || getRepository(Bizplace)
  if (typeof bizplace === 'string') {
    bizplace = await bizplaceRepo.findOne({ id: bizplace })
  }

  const bizplaceRoles: BizplaceRole[] = await bizplaceRoleRepo.find({
    where: {
      domain,
      bizplace
    },
    relations: ['domain', 'bizplace', 'role']
  })

  return <Role[]>bizplaceRoles.map((bizplaceRole: BizplaceRole) => bizplaceRole.role)
}
