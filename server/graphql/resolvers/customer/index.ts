import { customerResolver } from './customer'
import { customersResolver } from './customers'

import { updateCustomer } from './update-customer'
import { updateMultipleCustomer } from './update-multiple-customer'
import { createCustomer } from './create-customer'
import { deleteCustomer } from './delete-customer'
import { deleteCustomers } from './delete-customers'

export const Query = {
  ...customerResolver,
  ...customersResolver
}

export const Mutation = {
  ...updateCustomer,
  ...createCustomer,
  ...deleteCustomer,
  ...deleteCustomers,
  ...updateMultipleCustomer
}
