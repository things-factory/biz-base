import { getRepository, In } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const deleteContactPoints = {
  async deleteContactPoints(_: any, { names }, context: any) {
    await getRepository(ContactPoint).delete({
      domain: context.domain,
      name: In(names)
    })

    return true
  }
}
