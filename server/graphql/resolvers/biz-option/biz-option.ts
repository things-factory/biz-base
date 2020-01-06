import { getRepository } from 'typeorm'
import { BizOption } from '../../../entities'

export const bizOptionResolver = {
  async bizOption(_: any, { name }, context: any) {
    return await getRepository(BizOption).findOne({
      where: { domain: context.state.domain, name },
      relations: ['domain', 'bizplace', 'bizOptionDetails', 'creator', 'updater']
    })
  }
}
