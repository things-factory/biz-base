import { Role, User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { Bizplace, BizplaceUser } from '../../../entities'
import { rolesByBizplace } from './roles-by-bizplace'

export const rolesByUserBizplaceResolver = {
  async rolesByUserBizplace(_: any, _params: any, context: any) {
    return await rolesByBizplace(context.state.user, context.state.domain)
  }
}

export async function rolesByUserBizplace(user: User, domain: Domain, trxMgr?: EntityManager): Promise<Role[]> {
  const bizUsrRepo: Repository<BizplaceUser> = trxMgr?.getRepository(BizplaceUser) || getRepository(BizplaceUser)
  const bizplaceUser: BizplaceUser = await bizUsrRepo.findOne({
    where: { user },
    relations: ['bizplace']
  })
  const currentBizplace: Bizplace = bizplaceUser.bizplace
  return await rolesByBizplace(domain, currentBizplace, trxMgr)
}
