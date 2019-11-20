import { User } from '@things-factory/auth-base'
import { EntityManager, getManager, Repository, getRepository } from 'typeorm'
import { PARTNERSHIP_STATUS } from '../../../constants/partnership-status'
import { Partner } from '../../../entities'

export const rejectPartnership = {
  async rejectPartnership(_: any, { id }, context: any): Promise<void> {
    await getManager().transaction(async (trxMgr: EntityManager) => {
      await reject(id, context.state.user, trxMgr)
    })
  }
}

export const reject = async function(id: string, user: User, trxMgr?: EntityManager): Promise<void> {
  const partnerRepo: Repository<Partner> = trxMgr ? trxMgr.getRepository(Partner) : getRepository(Partner)
  const partner: Partner = await partnerRepo.findOne(id)
  await partnerRepo.save({
    ...partner,
    status: PARTNERSHIP_STATUS.REJECTED,
    updater: user
  })
}
