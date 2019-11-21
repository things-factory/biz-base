import { EntityManager, getManager } from 'typeorm'
import { Bizplace, Worker } from '../../../entities'

export const updateMultipleWorker = {
  async updateMultipleWorker(_: any, { patches }, context: any) {
    getManager().transaction(async (trxMgr: EntityManager) => {
      let results = []
      const _createRecords = patches.filter((patch: any) => patch.cuFlag === '+')
      const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')
      const workerRepo = trxMgr.getRepository(Worker)
      const bizplaceRepo = trxMgr.getRepository(Bizplace)

      if (_createRecords.length > 0) {
        for (let i = 0; i < _createRecords.length; i++) {
          const newRecord = _createRecords[i]

          if (newRecord.bizplace && newRecord.bizplace.id) {
            newRecord.bizplace = await bizplaceRepo.findOne(newRecord.bizplace.id)
          } else {
            throw new Error(`There's no specified bizplace id`)
          }

          const result = await workerRepo.save({
            domain: context.state.domain,
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
          const worker = await workerRepo.findOne({ id: newRecord.id })

          if (newRecord.bizplace && newRecord.bizplace.id) {
            newRecord.bizplace = await bizplaceRepo.findOne(newRecord.bizplace.id)
          }

          const result = await workerRepo.save({
            ...worker,
            ...newRecord,
            updater: context.state.user
          })

          results.push({ ...result, cuFlag: 'M' })
        }
      }

      return results
    })
  }
}
