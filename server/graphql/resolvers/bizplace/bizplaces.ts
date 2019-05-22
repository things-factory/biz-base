import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const bizplacesResolver = {
  async bizplaces() {
    const repository = getRepository(Bizplace)

    return await repository.find()
  }
}
