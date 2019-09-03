import { getRepository } from 'typeorm'
import { Worker } from '../../../entities'

export const deleteWorker = {
  async deleteWorker(_: any, { name }, context: any) {
    await getRepository(Worker).delete({ domain: context.state.domain, name })
    return true
  }
}
