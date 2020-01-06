import * as typeDefs from './types'
import * as resolvers from './resolvers'

export { createCompany, deleteCompany, deleteCompanies, updateCompany } from './resolvers/company'
export { createWorker, deleteWorker, deleteWorkers, updateWorker } from './resolvers/worker'

export const schema = {
  typeDefs,
  resolvers
}
