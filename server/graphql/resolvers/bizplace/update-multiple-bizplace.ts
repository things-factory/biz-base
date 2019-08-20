import { getRepository } from 'typeorm'
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
      for (let i = 0; i < _createRecords.length; i++) {
        const bizplace = _createRecords[i]
        const result = await repository.save({
          domain: context.domain,
          creator: context.state.user,
          updater: context.state.user,
          ...bizplace,
          company: { ...bizplace.company }
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

        const bizplace = await repository.findOne({ where: { name: patch.name }, relations: ['company', 'updater'] })
        const result = await repository.save({
          ...bizplace,
          ...patch,
          updater: context.state.user,
          company: {
            ...bizplace.company,
            ...patch.company
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
