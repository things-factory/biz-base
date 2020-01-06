import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const deleteContactPoint = {
  async deleteContactPoint(_: any, { id }, _context: any) {
    return await getRepository(ContactPoint).delete(id)
  }
}
