import { getRepository } from 'typeorm'
import { Customer } from '../../../entities'

export const deleteCustomer = {
  async deleteCustomer(_: any, { name }, context: any) {
    return await getRepository(Customer).delete({ domain: context.state.domain, name })
  }
}
