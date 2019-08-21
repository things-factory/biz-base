import { getRepository } from 'typeorm'
import { Bizplace, Company } from '../../../entities'

export const updateMultipleBizplace = {
  async updateMultipleBizplace(_: any, { patches }, context: any) {
    let results = []
    const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
    const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')
    const bizplaceRepo = getRepository(Bizplace)
    const companyRepo = getRepository(Company)

    if (_createRecords.length > 0) {
      for (let i = 0; i < _createRecords.length; i++) {
        const newRecord = _createRecords[i]

        if (newRecord.company && newRecord.company.id) {
          newRecord.company = await companyRepo.findOne(newRecord.company.id)
        }

        const result = await bizplaceRepo.save({
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
        const bizplace = await bizplaceRepo.findOne(newRecord.id)

        if (newRecord.company && newRecord.company.id) {
          newRecord.company = await companyRepo.findOne(newRecord.company.id)
        }

        const result = await bizplaceRepo.save({
          ...bizplace,
          ...newRecord,
          updater: context.state.user
        })

        results.push({ ...result, cuFlag: 'M' })
      }
    }

    return results
  }
}
