import { getRepository } from 'typeorm'
import { ContactPoint } from '../../../entities'

export const updateMultipleContactPoint = {
  async updateMultipleContactPoint(_: any, { patches }, context: any) {
    let results = []
    let _createRecords = []
    let _updateRecords = []

    patches.forEach((patch: any) => {
      if (patch.cuFlag.toUpperCase() === '+') {
        delete patch.cuFlag
        _createRecords.push(patch)
      } else if (patch.cuFlag.toUpperCase() === 'M') {
        delete patch.cuFlag
        _updateRecords.push(patch)
      }
    })

    const repository = getRepository(ContactPoint)

    if (_createRecords.length > 0) {
      for (let i = 0; i < _createRecords.length; i++) {
        const contactPoint = _createRecords[i]
        const result = await repository.save({
          domain: context.domain,
          creator: context.state.user,
          updater: context.state.user,
          ...contactPoint,
          bizplace: { ...contactPoint.bizplace }
        })

        results = [
          ...results,
          {
            ...result,
            cuFlag: '+'
          }
        ]
      }
    }

    if (_updateRecords.length > 0) {
      for (let i = 0; i < _updateRecords.length; i++) {
        const patch = _updateRecords[i]

        const contactPoint = await repository.findOne({ where: { id: patch.id }, relations: ['bizplace', 'updater'] })
        const result = await repository.save({
          ...contactPoint,
          ...patch,
          updater: context.state.user,
          bizplace: {
            ...contactPoint.bizplace,
            ...patch.bizplace
          }
        })

        results = [
          ...results,
          {
            ...result,
            cuFlag: 'M'
          }
        ]
      }
    }

    return results
  }
}
