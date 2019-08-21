import { getRepository } from 'typeorm'
import { Bizplace, Company } from '../../../entities'

export const updateBizplace = {
  async updateBizplace(_: any, { name, patch }, context: any) {
    const bizplace = await getRepository(Bizplace).findOne({ domain: context.domain, name })

    if (patch.companyId) {
      patch.company = await getRepository(Company).findOne(patch.companyId)
      delete patch.companyId
    }

    return await getRepository(Bizplace).save({
      ...bizplace,
      ...patch,
      updater: context.state.user
    })
  }
}
