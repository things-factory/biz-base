import { Company } from './company'
import { CompanyList } from './company-list'
import { CompanyPatch } from './company-patch'
import { NewCompany } from './new-company'

export const Mutation = `
  createCompany (
    company: NewCompany!
  ): Company

  updateCompany (
    name: String!
    patch: CompanyPatch!
  ): Company

  updateMultipleCompany (
    patches: [CompanyPatch]!
  ): [Company]

  deleteCompany (
    name: String!
  ): Company

  deleteCompanies (
    names: [String]!
  ): Boolean
`

export const Query = `
  companies(filters: [Filter], pagination: Pagination, sortings: [Sorting]): CompanyList
  company(name: String!): Company
`

export const Types = [Company, NewCompany, CompanyPatch, CompanyList]
