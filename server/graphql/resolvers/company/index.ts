import { companiesResolver } from './companies'
import { companyResolver } from './company'
import { createCompany, createCompanyResolver } from './create-company'
import { deleteCompanies, deleteCompaniesResolver } from './delete-companies'
import { deleteCompany, deleteCompanyResolver } from './delete-company'
import { updateCompany, updateCompanyResolver } from './update-company'
import { updateMultipleCompany } from './update-multiple-company'

export const Query = {
  ...companyResolver,
  ...companiesResolver
}

export const Mutation = {
  ...updateCompanyResolver,
  ...createCompanyResolver,
  ...deleteCompanyResolver,
  ...deleteCompaniesResolver,
  ...updateMultipleCompany
}

export { createCompany, deleteCompanies, updateCompany, deleteCompany }
