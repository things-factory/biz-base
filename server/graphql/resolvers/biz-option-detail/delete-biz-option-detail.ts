import { getRepository } from 'typeorm'
import { BizOptionDetail } from '../../../entities'

export const deleteBizOptionDetail = {
  async deleteBizOptionDetail(_: any, { name }, context: any) {
    await getRepository(BizOptionDetail).delete({ domain: context.state.domain, name })
    return true
  }
}

