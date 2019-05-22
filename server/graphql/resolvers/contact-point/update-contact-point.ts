import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const updateContactPoint = {
  async updateContactPoint(_, { id, patch }) {
    const repository = getRepository(ContactPoint)

    const contactPoint = await repository.findOne({ id })

    return await repository.save({
      ...contactPoint,
      ...patch
    })
  }
}
