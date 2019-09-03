import { getRepository } from 'typeorm'
import { Bizplace, Company } from '../../../entities'

export const updateBizplace = {
  async updateBizplace(_: any, { name, patch }, context: any) {
    const bizplace = await getRepository(Bizplace).findOne({ domain: context.state.domain, name })

    if (patch.company && patch.company.id) {
      patch.company = await getRepository(Company).findOne(patch.company.id)
    }

    return await getRepository(Bizplace).save({
      ...bizplace,
      ...patch,
      updater: context.state.user
    })
  }
}
