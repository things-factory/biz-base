import { EntityManager, getManager } from 'typeorm'
import { Company } from '../../../entities'
import { createCompany } from './create-company'
import { updateCompany } from './update-company'

export const updateMultipleCompany = {
  async updateMultipleCompany(_: any, { patches }, context: any): Promise<any> {
    return await getManager().transaction(async (trxMgr: EntityManager) => {
      let results = []
      const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
      const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')

      if (_createRecords.length > 0) {
        for (let i = 0; i < _createRecords.length; i++) {
          const patch: Company = _createRecords[i]
          const result = await createCompany(patch, context.state.domain, context.state.user, trxMgr)
          results.push({ ...result, cuFlag: '+' })
        }
      }

      if (_updateRecords.length > 0) {
        for (let i = 0; i < _updateRecords.length; i++) {
          const patch: Company = _updateRecords[i]
          const result = await updateCompany(patch.name, patch, context.state.domain, context.state.user, trxMgr)
          results.push({ ...result, cuFlag: 'M' })
        }
      }

      return results
    })
  }
}
