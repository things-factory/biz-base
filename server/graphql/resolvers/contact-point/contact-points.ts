import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const contactPointsResolver = {
  async contactPoints() {
    const repository = getRepository(ContactPoint)

    return await repository.find()
  }
}
