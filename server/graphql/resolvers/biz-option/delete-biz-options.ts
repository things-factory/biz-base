import { getRepository, In } from 'typeorm'
import { BizOption } from '../../../entities'

export const deleteBizOptions = {
  async deleteBizOptions(_: any, { names }, context: any) {
    await getRepository(BizOption).delete({ 
        domain: context.state.domain,
        name: In(names)
    })
    return true
  }
}

