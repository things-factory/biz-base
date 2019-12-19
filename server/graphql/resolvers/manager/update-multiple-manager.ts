import { EntityManager, getManager } from 'typeorm'
import { Manager } from '../../../entities'
import { createManager } from './create-manager'
import { updateManager } from './update-manager'

export const updateMultipleManagerResolver = {
  async updateMultipleManager(_: any, { patches }, _context: any) {
    return await getManager().transaction(async (trxMgr: EntityManager) => {
      return await updateMultipleManager(patches, trxMgr)
    })
  }
}

export async function updateMultipleManager(patches: Manager[], trxMgr?: EntityManager): Promise<any> {
  let results: any[] = []
  const _createRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === '+')
  const _updateRecords = patches.filter((patch: any) => patch.cuFlag.toUpperCase() === 'M')

  if (_createRecords.length > 0) {
    for (let i = 0; i < _createRecords.length; i++) {
      const patch: Manager = _createRecords[i]

      const result = await createManager(patch, trxMgr)
      results.push({ ...result, cuFlag: '+' })
    }
  }

  if (_updateRecords.length > 0) {
    for (let i = 0; i < _updateRecords.length; i++) {
      const patch: Manager = _updateRecords[i]
      const result = await updateManager(patch.id, patch, trxMgr)
      results.push({ ...result, cuFlag: 'M' })
    }
  }

  return results
}
