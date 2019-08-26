import { getRepository } from 'typeorm'
import { Partner } from '../../../entities'

export const deletePartner = {
  async deletePartner(_: any, { id }) {
    await getRepository(Partner).delete(id)
    return true
  }
}
