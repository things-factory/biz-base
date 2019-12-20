import { createPartner } from './create-partner'
import { deletePartner } from './delete-partner'
import { partnersResolver } from './partners'
import { roleAssignedPartners, roleAssignedPartnersResolver } from './role-assigned-partners'

export const Query = { ...partnersResolver, ...roleAssignedPartnersResolver }

export const Mutation = {
  ...createPartner,
  ...deletePartner
}

export { roleAssignedPartners }
