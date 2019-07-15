import { getRepository } from 'typeorm'
import { Customer } from '../../../entities'

export const customerResolver = {
  async customer(_: any, { name }, context: any) {
    return await getRepository(Customer).findOne({ domain: context.domain, name })
  }
}
