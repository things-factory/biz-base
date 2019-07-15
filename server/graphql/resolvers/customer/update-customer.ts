import { getRepository } from 'typeorm'
import { Customer } from '../../../entities'

export const updateCustomer = {
  async updateCustomer(_: any, { name, patch }, context: any) {
    const repository = getRepository(Customer)
    const customer = await repository.findOne({ domain: context.domain, name })

    return await repository.save({
      ...customer,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
