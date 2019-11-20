import { User } from '@things-factory/auth-base'
import { EntityManager, getManager, getRepository, Repository } from 'typeorm'
import { PARTNERSHIP_STATUS } from '../../../constants/partnership-status'
import { Partner } from '../../../entities'

export const approvePartnership = {
  async approvePartnership(_: any, { id }, context: any): Promise<void> {
    getManager().transaction(async (trxMgr: EntityManager) => {
      await approve(id, context.state.user, trxMgr)
    })
  }
}

export const approve = async function(id: string, user: User, trxMgr?: EntityManager): Promise<void> {
  const partnerRepo: Repository<Partner> = trxMgr ? trxMgr.getRepository(Partner) : getRepository(Partner)
  const partner: Partner = await partnerRepo.findOne(id)
  await partnerRepo.save({
    ...partner,
    activated: true,
    status: PARTNERSHIP_STATUS.APPROVED,
    updater: user
  })
}
