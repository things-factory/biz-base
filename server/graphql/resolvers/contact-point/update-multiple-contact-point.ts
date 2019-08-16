import { getRepository, Transaction } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const updateMultipleContactPoint = {
  async updateMultipleContactPoint(_: any, { patches }, context: any) {
    const results = []
    const _createRecords = patches
      .filter((patch: any) => patch.cuFlag === '+')
      .map((patch: any) => {
        delete patch.cuFlag
        return patch
      })
    const _updateRecords = patches
      .filter((patch: any) => patch.cuFlag === 'M')
      .map((patch: any) => {
        delete patch.cuFlag
        return patch
      })

    const repository = getRepository(ContactPoint)

    if (_createRecords.length > 0) {
      const result = await repository.save(
        _createRecords.map((patch: any) => {
          return {
            domain: context.domain,
            ...patch,
            creatorId: context.state.user.id,
            updaterId: context.state.user.id
          }
        })
      )

      results.push(result)
    }

    if (_updateRecords.length > 0) {
      const result = await repository.save(
        _updateRecords.map(async (patch: any) => {
          const contactPoint = await repository.findOne(patch.id)

          return {
            ...contactPoint,
            ...patch,
            updaterId: context.state.user.id
          }
        })
      )

      results.push(result)
    }

    return results
  }
}
