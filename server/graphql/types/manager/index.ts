import { Manager } from './manager'
import { ManagerList } from './manager-list'
import { ManagerPatch } from './manager-patch'
import { NewManager } from './new-manager'

export const Mutation = `
  createManager (
    manager: NewManager!
  ): Manager

  updateManager (
    id: String!
    patch: ManagerPatch!
  ): Manager

  updateMultipleManager (
    patches: [ManagerPatch]!
  ): [Manager]

  deleteManager (
    id: String!
  ): Boolean

  deleteManagers (
    ids: [String]!
  ): Boolean
`

export const Query = `
  managers(filters: [Filter], pagination: Pagination, sortings: [Sorting]): ManagerList
  manager(id: String!): Manager
`

export const Types = [Manager, NewManager, ManagerPatch, ManagerList]
