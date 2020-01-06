import { getRepository } from 'typeorm'
import { BizOptionDetail } from '../../../entities'

export const bizOptionDetailResolver = {
  async bizOptionDetail(_: any, { name }, context: any) {
    return await getRepository(BizOptionDetail).findOne({
      where: { domain: context.state.domain, name },
      relations: ['domain', 'bizOption', 'creator', 'updater']
    })
  }
}
