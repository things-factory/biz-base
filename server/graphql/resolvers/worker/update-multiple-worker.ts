import { EntityManager, getManager } from 'typeorm'
import { Worker } from '../../../entities'
import { createWorker } from './create-worker'
import { updateWorker } from './update-worker'

export const updateMultipleWorker = {
  async updateMultipleWorker(_: any, { patches }, context: any): Promise<any> {
    return await getManager().transaction(async (trxMgr: EntityManager) => {
      let results = []
      const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
      const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')

      if (_createRecords.length > 0) {
        for (let i = 0; i < _createRecords.length; i++) {
          const patch: Worker = _createRecords[i]
          const result = await createWorker(patch, context.state.domain, context.state.user, trxMgr)
          results.push({ ...result, cuFlag: '+' })
        }
      }

      if (_updateRecords.length > 0) {
        for (let i = 0; i < _updateRecords.length; i++) {
          const patch: Worker = _updateRecords[i]
          const result = await updateWorker(patch.id, patch, context.state.domain, context.state.user, trxMgr)
          results.push({ ...result, cuFlag: 'M' })
        }
      }

      return results
    })
  }
}
