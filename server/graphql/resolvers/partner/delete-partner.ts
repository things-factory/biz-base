import { getRepository } from 'typeorm'
import { Partner } from '../../../entities'

export const deletePartner = {
  async deletePartner(_: any, { name }, context: any) {
    await getRepository(Partner).delete({ domain: context.domain, name })
    return true
  }
}

