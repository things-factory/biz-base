import { createPartner } from './create-partner'
import { deletePartner } from './delete-partner'
import { rejectPartnership } from './reject-partnership'
import { approvePartnership } from './approve-partnership'
import { partnersResolver } from './partners'

export const Query = { ...partnersResolver }

export const Mutation = {
  ...createPartner,
  ...deletePartner,
  ...rejectPartnership,
  ...approvePartnership
}
