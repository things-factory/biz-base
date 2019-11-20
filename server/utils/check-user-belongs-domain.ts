import { Domain } from '@things-factory/shell'
import { User } from '@things-factory/auth-base'
import { Bizplace, BizplaceUser } from '../entities'
import { getRepository } from 'typeorm'

/**
 * @description Based on domain and user information,
 * Find out whether the user belongs domain or user has partnsership with domain
 *
 * @param domain
 * @param user
 */
export async function checkUserBelongsDomain(domain: Domain, user: User): Promise<Boolean> {
  // Case 1. If the user belongs in the domain => bizplaces_users table doesn't have data
  // Case 2. If the user dosen't blongs in the domain => bizplaces_users table has data

  // Get bizplace which is matched with domain.
  const domainBizplace: Bizplace = await getRepository(Bizplace).findOne({ where: { domain } })
  const bizplaceUser: BizplaceUser = await getRepository(BizplaceUser).findOne({
    where: { bizplace: domainBizplace, user }
  })

  return bizplaceUser ? true : false
}
