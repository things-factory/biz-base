import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const contactPointResolver = {
  async contactPoint(_: any, { name }, context: any) {
    return await getRepository(ContactPoint).findOne({
      where: { domain: context.state.domain, name },
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
  }
}
