import { getRepository, In } from 'typeorm'
import { Bizplace } from '../../../entities'

export const deleteBizplaces = {
  async deleteBizplaces(_: any, { names }, context: any) {
    await getRepository(Bizplace).delete({
      domain: context.domain,
      name: In(names)
    })

    return true
  }
}
