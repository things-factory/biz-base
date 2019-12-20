import { createPartner } from './create-partner'
import { deletePartner } from './delete-partner'
import { partnersResolver } from './partners'
import { roleAssignedpartners, roleAssignedPartnersResolver } from './role-assigned-partners'

export const Query = { ...partnersResolver, ...roleAssignedPartnersResolver }

export const Mutation = {
  ...createPartner,
  ...deletePartner
}

export { roleAssignedpartners }
