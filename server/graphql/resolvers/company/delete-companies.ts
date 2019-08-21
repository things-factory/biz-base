import { getRepository, In } from 'typeorm'
import { Company } from '../../../entities'

export const deleteCompanies = {
  async deleteCompanies(_: any, { names }) {
    await getRepository(Company).delete({
      name: In(names)
    })

    return true
  }
}
