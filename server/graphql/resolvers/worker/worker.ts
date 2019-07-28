import { getRepository } from 'typeorm'
import { Worker } from '../../../entities'

export const workerResolver = {
  async worker(_: any, { name }, context: any) {
    return await getRepository(Worker).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
  }
}
