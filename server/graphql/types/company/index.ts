import { Company } from './company'
import { CompanyList } from './company-list'
import { CompanyPatch } from './company-patch'
import { NewCompany } from './new-company'

export const Mutation = `
  createCompany (
    company: NewCompany!
  ): Company @priviledge(category: "company", priviledge: "mutation")

  updateCompany (
    name: String!
    patch: CompanyPatch!
  ): Company @priviledge(category: "company", priviledge: "mutation")

  updateMultipleCompany (
    patches: [CompanyPatch]!
  ): [Company] @priviledge(category: "company", priviledge: "mutation")

  deleteCompany (
    id: String!
  ): Company @priviledge(category: "company", priviledge: "mutation")

  deleteCompanies (
    ids: [String]!
  ): Boolean @priviledge(category: "company", priviledge: "mutation")
`

export const Query = `
  companies(filters: [Filter], pagination: Pagination, sortings: [Sorting]): CompanyList @priviledge(category: "company", priviledge: "query")
  company(name: String!): Company @priviledge(category: "company", priviledge: "query")
`

export const Types = [Company, NewCompany, CompanyPatch, CompanyList]
