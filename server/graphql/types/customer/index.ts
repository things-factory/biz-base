import { Company } from './company'
import { NewCompany } from './new-company'
import { CompanyPatch } from './company-patch'

export const Mutation = `
  createCompany (
    company: NewCompany!
  ): Company

  updateCompany (
    id: String!
    patch: CompanyPatch!
  ): Company

  deleteCompany (
    id: String!
  ): Company
`

export const Query = `
  companys: [Company]
  company(id: String!): Company
`

export const Types = [Company, NewCompany, CompanyPatch]
