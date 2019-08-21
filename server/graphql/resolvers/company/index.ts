import { companyResolver } from './company'
import { companiesResolver } from './companies'

import { updateCompany } from './update-company'
import { updateMultipleCompany } from './update-multiple-company'
import { createCompany } from './create-company'
import { deleteCompany } from './delete-company'
import { deleteCompanies } from './delete-companies'

export const Query = {
  ...companyResolver,
  ...companiesResolver
}

export const Mutation = {
  ...updateCompany,
  ...updateMultipleCompany,
  ...createCompany,
  ...deleteCompany,
  ...deleteCompanies
}
