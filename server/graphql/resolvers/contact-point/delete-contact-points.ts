import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const deleteContactPoints = {
  async deleteContactPoints(_: any, { ids }, _context: any) {
    await getRepository(ContactPoint).delete(ids)

    return true
  }
}
