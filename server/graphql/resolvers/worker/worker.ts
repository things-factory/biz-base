import { getRepository, In } from 'typeorm'
import { Bizplace, Worker } from '../../../entities'

export const workerResolver = {
  async worker(_: any, { name }, context: any) {
    return await getRepository(Worker).findOne({
      where: {
        domain: context.state.domain,
        name,
        bizplace: In(context.state.bizplaces.map((bizplace: Bizplace) => bizplace.id))
      },
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
  }
}
