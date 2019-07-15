import { getRepository } from 'typeorm'
import { Vendor } from '../../../entities'

export const vendorResolver = {
  async vendor(_: any, { name }, context: any) {
    return await getRepository(Vendor).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
  }
}
