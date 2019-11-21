import { createPartner } from './create-partner'
import { deletePartner } from './delete-partner'
import { partnersResolver } from './partners'

export const Query = { ...partnersResolver }

export const Mutation = {
  ...createPartner,
  ...deletePartner
}
