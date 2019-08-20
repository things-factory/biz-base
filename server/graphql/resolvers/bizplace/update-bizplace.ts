import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const updateBizplace = {
  async updateBizplace(_: any, { name, patch }, context: any) {
    const repository = getRepository(Bizplace)
    const bizplace = await repository.findOne({
      where: { domain: context.domain, name },
      relations: ['company', 'updater']
    })

    return await repository.save({
      ...bizplace,
      ...patch,
      updater: context.state.user,
      company: {
        ...bizplace.company,
        ...patch.company
      }
    })
  }
}
