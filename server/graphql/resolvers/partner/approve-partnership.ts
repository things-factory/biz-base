import { User } from '@things-factory/auth-base'
import { EntityManager, getManager, getRepository } from 'typeorm'
import { PARTNERSHIP_STATUS } from '../../../constants/partnership-status'
import { Partner } from '../../../entities'

export const approvePartnership = {
  async approvePartnership(_: any, { id }, context: any): Promise<void> {
    getManager().transaction(async (trxMgr: EntityManager) => {
      await approve(id, context.state.user)
    })
  }
}

export const approve = async function(id: string, user: User): Promise<void> {
  const partner: Partner = await getRepository(Partner).findOne(id)
  await getRepository(Partner).save({
    ...partner,
    activated: true,
    status: PARTNERSHIP_STATUS.APPROVED,
    updater: user
  })
}
