import { getRepository } from 'typeorm'
import { Bizplace } from '../../../entities'

export const deleteBizplace = {
  async deleteBizplace(_: any, { name }) {
    await getRepository(Bizplace).delete(name)

    return true
  }
}
