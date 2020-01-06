import { getRepository } from 'typeorm'
import { BizOption } from '../../../entities'

export const deleteBizOption = {
  async deleteBizOption(_: any, { name }, context: any) {
    await getRepository(BizOption).delete({ domain: context.state.domain, name })
    return true
  }
}

