import { getRepository } from 'typeorm'
import { Customer } from '../../../entities'

export const updateCustomer = {
  async updateCustomer(_: any, { name, patch }, context: any) {
    const customer = await getRepository(Customer).findOne({ domain: context.domain, name })

    return await getRepository(Customer).save({
      ...customer,
      ...patch,
      updater: context.state.user
    })
  }
}
