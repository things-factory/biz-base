import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const deleteContactPoint = {
  async deleteContactPoint(_, { id }) {
    const repository = getRepository(ContactPoint)

    return await repository.delete(id)
  }
}
