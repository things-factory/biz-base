import { createManager, createManagerResolver } from './create-manager'
import { deleteManager, deleteManagerResolver } from './delete-manager'
import { deleteManagers, deleteManagersResolver } from './delete-managers'
import { manager, managerResolver } from './manager'
import { managers, managersResolver } from './managers'
import { updateManager, updateManagerResolver } from './update-manager'
import { updateMultipleManager, updateMultipleManagerResolver } from './update-multiple-manager'

export const Query = {
  ...managersResolver,
  ...managerResolver
}

export const Mutation = {
  ...updateManagerResolver,
  ...updateMultipleManagerResolver,
  ...createManagerResolver,
  ...deleteManagerResolver,
  ...deleteManagersResolver
}

export { manager, managers, createManager, updateManager, deleteManager, deleteManagers, updateMultipleManager }
