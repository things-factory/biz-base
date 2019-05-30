import { Company } from './company'
import { NewCompany } from './new-company'
import { CompanyPatch } from './company-patch'
import { CompanyList } from './company-list'
import { Filter, Pagination, Sorting } from '@things-factory/shell'

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
  companies(filters: [Filter], pagination: Pagination, sortings: [Sorting]): CompanyList
  company(id: String!): Company
`

export const Types = [Company, NewCompany, CompanyPatch, CompanyList, Filter, Pagination, Sorting]
