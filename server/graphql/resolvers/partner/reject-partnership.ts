import { User } from '@things-factory/auth-base'
import { EntityManager, getManager, getRepository } from 'typeorm'
import { PARTNERSHIP_STATUS } from '../../../constants/partnership-status'
import { Partner } from '../../../entities'

export const rejectPartnership = {
  async rejectPartnership(_: any, { id }, context: any): Promise<void> {
    await getManager().transaction(async (trxMgr: EntityManager) => {
      await reject(id, context.state.user)
    })
  }
}

export const reject = async function(id: string, user: User): Promise<void> {
  const partner: Partner = await getRepository(Partner).findOne(id)
  await getRepository(Partner).save({
    ...partner,
    status: PARTNERSHIP_STATUS.REJECTED,
    updater: user
  })
}
