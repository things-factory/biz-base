import { getRepository, Transaction } from 'typeorm'
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

      results = [
        ...results,
        ...result.map(item => {
          return {
            ...item,
            cuFlag: '+'
          }
        })
      ]
    }

    if (_updateRecords.length > 0) {
      for (let i = 0; i < _updateRecords.length; i++) {
        const patch = _updateRecords[i]

        const contactPoint = await repository.findOne({ where: { name: patch.name } })
        const result = await repository.save({
          ...contactPoint,
          ...patch,
          updaterId: context.state.user.id
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
