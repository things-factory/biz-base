import { getRepository, In } from 'typeorm'
import { getUserBizplaces } from '../../../index'
import { Worker } from '../../../entities'

export const workerResolver = {
  async worker(_: any, { name }, context: any) {
    return await getRepository(Worker).findOne({
      where: { domain: context.state.domain, name, bizplace: In(await getUserBizplaces(context)) },
      relations: ['domain', 'bizplace', 'creator', 'updater']
    })
  }
}
