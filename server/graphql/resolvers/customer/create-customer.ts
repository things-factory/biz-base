import { getRepository } from 'typeorm'
import { Customer } from '../../../entities'

export const createCustomer = {
  async createCustomer(_: any, { customer }, context: any) {
    return await getRepository(Customer).save({
      domain: context.domain,
      ...customer,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
