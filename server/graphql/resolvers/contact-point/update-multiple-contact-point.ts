import { getRepository } from 'typeorm'
import { ContactPoint, Bizplace } from '../../../entities'

export const updateMultipleContactPoint = {
  async updateMultipleContactPoint(_: any, { patches }, context: any) {
    let results = []
    const _createRecords = patches.filter((patch: any) => patch.cuFlag === '+')
    const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')
    const contactPointRepo = getRepository(ContactPoint)
    const bizplaceRepo = getRepository(Bizplace)

    if (_createRecords.length > 0) {
      for (let i = 0; i < _createRecords.length; i++) {
        const newRecord = _createRecords[i]

        if (newRecord.bizplaceId) {
          newRecord.bizplace = await bizplaceRepo.findOne(newRecord.bizplaceId)
          delete newRecord.bizplaceId
        }

        const result = await contactPointRepo.save({
          domain: context.domain,
          creator: context.state.user,
          updater: context.state.user,
          ...newRecord
        })

        results.push({ ...result, cuFlag: '+' })
      }
    }

    if (_updateRecords.length > 0) {
      for (let i = 0; i < _updateRecords.length; i++) {
        const newRecord = _updateRecords[i]
        const contactPoint = await contactPointRepo.findOne({ id: newRecord.id })

        if (newRecord.bizplaceId) {
          newRecord.bizplace = await bizplaceRepo.findOne(newRecord.bizplaceId)
          delete newRecord.bizplaceId
        }

        const result = await contactPointRepo.save({
          ...contactPoint,
          ...newRecord,
          updater: context.state.user
        })

        results.push({ ...result, cuFlag: 'M' })
      }
    }

    return results
  }
}
