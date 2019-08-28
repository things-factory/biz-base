import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const bizplaceResolver = {
  async bizplace(_: any, { name }) {
    return await getRepository(Bizplace).findOne({
      where: { name },
      relations: ['company', 'domain', 'users', 'creator', 'updater']
    })
  }
}
