import { Company } from './company'
import { CompanyList } from './company-list'
import { CompanyPatch } from './company-patch'
import { NewCompany } from './new-company'

export const Mutation = `
  createCompany (
    company: NewCompany!
  ): Company @priviledge(priviledge: "mutation")

  updateCompany (
    name: String!
    patch: CompanyPatch!
  ): Company @priviledge(priviledge: "mutation")

  updateMultipleCompany (
    patches: [CompanyPatch]!
  ): [Company] @priviledge(priviledge: "mutation")

  deleteCompany (
    name: String!
  ): Company @priviledge(priviledge: "mutation")

  deleteCompanies (
    names: [String]!
  ): Boolean @priviledge(priviledge: "mutation")
`

export const Query = `
  companies(filters: [Filter], pagination: Pagination, sortings: [Sorting]): CompanyList @priviledge(priviledge: "query")
  company(name: String!): Company @priviledge(priviledge: "query")
`

export const Types = [Company, NewCompany, CompanyPatch, CompanyList]
