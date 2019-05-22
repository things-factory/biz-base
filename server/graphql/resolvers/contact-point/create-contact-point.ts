import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const createContactPoint = {
  async createContactPoint(_, { contactPoint: attrs }) {
    const repository = getRepository(ContactPoint)
    const newContactPoint = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newContactPoint)
  }
}
