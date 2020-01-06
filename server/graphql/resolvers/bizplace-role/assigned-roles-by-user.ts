import { Role, User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { EntityManager, getRepository, Repository } from 'typeorm'
import { rolesByUserBizplace } from './roles-by-user-bizplace'

export const assignedRolesByUserResolver = {
  async assignedRolesByUser(_: any, { user }, context: any) {
    if (user?.id) {
      user = await getRepository(User).findOne(user.id)
    }

    return await assignedRolesByUser(user, context.state.domain)
  }
}

export async function assignedRolesByUser(user: User, domain: Domain, trxMgr?: EntityManager): Promise<Role[]> {
  const userRepo: Repository<User> = trxMgr?.getRepository(User) || getRepository(User)
  const permittedRoles: Role[] = await rolesByUserBizplace(user, domain, trxMgr)

  if (!user?.roles) {
    user = await userRepo.findOne({
      where: { id: user.id },
      relations: ['roles', 'roles.priviledges']
    })
  }

  const userRoles: Role[] = user.roles
  return permittedRoles.map((permittedRole: Role) => {
    return {
      assigned: userRoles.find((userRole: Role) => permittedRole.id === userRole.id) ? true : false,
      role: permittedRole
    }
  })
}
