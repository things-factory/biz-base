import { getRepository } from 'typeorm'
import { Company } from '../../../entities'

export const companyResolver = {
  async company(_: any, { name }) {
    return await getRepository(Company).findOne({
      where: { name },
      relations: ['domain', 'creator', 'updater']
    })
  }
}
