import { Company } from './company'
import { NewCompany } from './new-company'
import { CompanyPatch } from './company-patch'
import { Filter } from './filter'
import { CompanyList } from './company-list'

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
  companies(filters: [Filter]): CompanyList
  company(id: String!): Company
`

export const Types = [Company, NewCompany, CompanyPatch, Filter, CompanyList]
