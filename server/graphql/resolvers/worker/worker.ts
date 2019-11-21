import { getRepository, In } from 'typeorm'
import { Worker } from '../../../entities'
import { getPermittedBizplaceIds } from '../../../utils'

export const workerResolver = {
  async worker(_: any, { name }, context: any) {
    return await getRepository(Worker).findOne({
      where: {
        domain: context.state.domain,
        name,
        bizplace: In(await getPermittedBizplaceIds(context.state.domain, context.state.user))
      },
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
  }
}
