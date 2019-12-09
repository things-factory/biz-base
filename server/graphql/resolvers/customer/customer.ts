import { getRepository } from 'typeorm'
import { Customer } from '../../../entities'

export const customerResolver = {
  async customer(_: any, { name }, context: any) {
    return await getRepository(Customer).findOne({
      where: { domain: context.state.domain, name },
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
  }
}