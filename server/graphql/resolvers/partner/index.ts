import { partnerResolver } from './partner'
import { partnersResolver } from './partners'

import { updatePartner } from './update-partner'
import { createPartner } from './create-partner'
import { deletePartner } from './delete-partner'

export const Query = {
  ...partnersResolver,
  ...partnerResolver
}

export const Mutation = {
  ...updatePartner,
  ...createPartner,
  ...deletePartner
}
