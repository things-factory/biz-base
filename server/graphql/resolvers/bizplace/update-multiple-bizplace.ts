import { getRepository, Transaction } from 'typeorm'
import { Bizplace } from '../../../entities'

export const updateMultipleBizplace = {
  async updateMultipleBizplace(_: any, { patches }, context: any) {
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

    const repository = getRepository(Bizplace)

    if (_createRecords.length > 0) {
      const result = await repository.save(
        _createRecords.map((patch: any) => {
          return {
            creatorId: context.state.user.id,
            updaterId: context.state.user.id,
            ...patch
          }
        })
      )

      results = [
        ...results,
        result.map(item => {
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

        const bizplace = await repository.findOne({ where: { name: patch.name } })
        const result = await repository.save({
          ...bizplace,
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
