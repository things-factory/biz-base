import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const deleteBizplaces = {
  async deleteBizplaces(_: any, { ids }, _context: any) {
    await getRepository(Bizplace).delete(ids)

    return true
  }
}
