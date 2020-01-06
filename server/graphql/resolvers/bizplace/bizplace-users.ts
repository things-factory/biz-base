import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository, FindManyOptions, Repository, EntityManager, In } from 'typeorm'
import { Bizplace, BizplaceUser } from '../../../entities'
import { getMyBizplace } from '../../../utils'
import { User } from '@things-factory/auth-base'

export const bizplaceUsersResolver = {
  async bizplaceUsers(_: any, params: ListParam, context: any) {
    const myBizplace: Bizplace = await getMyBizplace(context.state.user)
    return await bizplaceUsers(myBizplace, {
      ...(await convertListParams(params)),
      relations: ['domain', 'domains', 'roles', 'roles.priviledges', 'roles.users']
    })
  }
}

export async function bizplaceUsers(
  bizplace: Bizplace,
  params: FindManyOptions<User>,
  trxMgr?: EntityManager
): Promise<{ items: User[]; total: number }> {
  const bizUsrRepo: Repository<BizplaceUser> = trxMgr?.getRepository(BizplaceUser) || getRepository(BizplaceUser)
  const userRepo: Repository<User> = trxMgr?.getRepository(User) || getRepository(User)
  const bizUsrs: BizplaceUser[] = await bizUsrRepo.find({
    where: { bizplace },
    relations: ['user']
  })
  const userIds: string[] = bizUsrs.map((bizUsr: BizplaceUser) => bizUsr.user.id)

  const [items, total] = await userRepo.findAndCount({
    ...params,
    where: {
      ...params.where,
      id: In(userIds)
    }
  })

  return {
    items,
    total
  }
}
