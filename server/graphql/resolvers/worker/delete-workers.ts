import { getRepository, In } from 'typeorm'
import { Worker } from '../../../entities'

export const deleteWorkers = {
  async deleteWorkers(_: any, { names }, context: any) {
    await getRepository(Worker).delete({
      domain: context.domain,
      name: In(names)
    })

    return true
  }
}
