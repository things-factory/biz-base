import { getRepository } from 'typeorm'
import { Partner } from '../../../entities'

export const partnerResolver = {
  async partner(_: any, { name }, context: any) {
    return await getRepository(Partner).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'customer', 'vendor', 'creator', 'updater']
    })
  }
}
