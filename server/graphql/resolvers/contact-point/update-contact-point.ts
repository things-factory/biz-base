import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const updateContactPoint = {
  async updateContactPoint(_: any, { name, patch }, context: any) {
    const repository = getRepository(ContactPoint)
    const contactPoint = await repository.findOne({
      where: { domain: context.domain, name },
      relations: ['bizplace', 'updater']
    })

    return await repository.save({
      ...contactPoint,
      ...patch,
      updater: context.state.user,
      bizplace: {
        ...contactPoint.bizplace,
        ...patch.bizplace
      }
    })
  }
}
