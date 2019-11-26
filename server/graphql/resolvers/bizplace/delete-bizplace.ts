import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const deleteBizplace = {
  async deleteBizplace(_: any, { id }, _context: any) {
    await getRepository(Bizplace).delete(id)

    return true
  }
}
