import { checkUserBelongsDomain } from '../../../utils/check-user-belongs-domain'
import { User } from '@things-factory/auth-base'
import { getRepository } from 'typeorm'

export const checkUserBelongsDomainResolver = {
  async checkUserBelongsDomain(_: any, {}, context: any): Promise<Boolean> {
    if (context?.state?.user?.id) {
      const user: User = await getRepository(User).findOne(context.state.user.id)
      return await checkUserBelongsDomain(context.state.domain, user)
    } else {
      throw new Error(`Failed to get current user information.`)
    }
  }
}
