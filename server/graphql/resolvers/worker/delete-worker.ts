import { getRepository } from 'typeorm'
import { Worker } from '../../../entities'

export const deleteWorker = {
  async deleteWorker(_: any, { name }, context: any) {
    return await getRepository(Worker).delete({ domain: context.domain, name })
  }
}
