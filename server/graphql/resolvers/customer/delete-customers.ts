import { getRepository, In } from 'typeorm'
import { Customer } from '../../../entities'

export const deleteCustomers = {
  async deleteCustomers(_: any, { names }, context: any) {
    await getRepository(Customer).delete({
      domain: context.state.domain,
      name: In(names)
    })

    return true
  }
}
