import { companyResolver } from './company'
import { companiesResolver } from './companies'

import { updateCompany } from './update-company'
import { createCompany } from './create-company'
import { deleteCompany } from './delete-company'

export const Query = {
  ...companyResolver,
  ...companiesResolver
}

export const Mutation = {
  ...updateCompany,
  ...createCompany,
  ...deleteCompany
}
