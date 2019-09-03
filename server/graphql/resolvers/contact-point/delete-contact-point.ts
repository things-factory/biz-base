import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const deleteContactPoint = {
  async deleteContactPoint(_: any, { name }, context: any) {
    return await getRepository(ContactPoint).delete({ domain: context.state.domain, name })
  }
}
