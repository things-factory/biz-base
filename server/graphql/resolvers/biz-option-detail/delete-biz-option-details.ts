import { getRepository, In } from 'typeorm'
import { BizOptionDetail } from '../../../entities'

export const deleteBizOptionDetails = {
  async deleteBizOptionDetails(_: any, { names }, context: any) {
    await getRepository(BizOptionDetail).delete({ 
        domain: context.state.domain,
        name: In(names)
    })
    return true
  }
}

