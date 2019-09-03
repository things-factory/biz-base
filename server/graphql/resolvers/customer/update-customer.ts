import { getRepository } from 'typeorm'
import { Customer, Bizplace } from '../../../entities'

export const updateCustomer = {
  async updateCustomer(_: any, { name, patch }, context: any) {
    const customer = await getRepository(Customer).findOne({ domain: context.state.domain, name })
    if (patch.bizplace && patch.bizplace.id) {
      patch.bizplace = await getRepository(Bizplace).findOne(patch.bizplace.id)
    }

    return await getRepository(Customer).save({
      ...customer,
      ...patch,
      updater: context.state.user
    })
  }
}
