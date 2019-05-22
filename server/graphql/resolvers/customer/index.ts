import { customerResolver } from './customer'
import { customersResolver } from './customers'

import { updateCustomer } from './update-customer'
import { createCustomer } from './create-customer'
import { deleteCustomer } from './delete-customer'

export const Query = {
  ...customerResolver,
  ...customersResolver
}

export const Mutation = {
  ...updateCustomer,
  ...createCustomer,
  ...deleteCustomer
}
