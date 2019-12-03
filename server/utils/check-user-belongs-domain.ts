import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Bizplace, BizplaceUser } from '../entities'

/**
 * @description Based on domain and user information,
 * Find out whether the user belongs domain or user has partnsership with domain
 *
 * @param domain
 * @param user
 */
export async function checkUserBelongsDomain(domain: Domain, user: User): Promise<Boolean> {
  // Case 1. If bizplaces_users table has record with current domain bizplace and user => return true
  // Case 2. If bizplaces_users table doesn't have record with current domain bizplace and user => return false

  // Get bizplace which is matched with domain.
  const domainBizplace: Bizplace = await getRepository(Bizplace).findOne({ where: { domain } })
  // Get bizplace which is user assigned.
  const bizplaceUser: BizplaceUser = await getRepository(BizplaceUser).findOne({
    where: { user },
    relations: ['bizplace']
  })

  return domainBizplace.id === bizplaceUser.bizplace.id
}
