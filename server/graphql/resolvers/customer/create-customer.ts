import { getRepository } from 'typeorm'
import { Customer, Bizplace } from '../../../entities'

export const createCustomer = {
  async createCustomer(_: any, { customer }, context: any) {
    if (customer.bizplace && customer.bizplace.id) {
      customer.bizplace = await getRepository(Bizplace).findOne(customer.bizplace.id)
    }

    return await getRepository(Customer).save({
      ...customer,
      domain: context.domain,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
