import { contactPointResolver } from './contact-point'
import { contactPointsResolver } from './contact-points'

import { updateContactPoint } from './update-contact-point'
import { updateMultipleContactPoint } from './update-multiple-contact-point'
import { createContactPoint } from './create-contact-point'
import { deleteContactPoint } from './delete-contact-point'

export const Query = {
  ...contactPointResolver,
  ...contactPointsResolver
}

export const Mutation = {
  ...updateContactPoint,
  ...updateMultipleContactPoint,
  ...createContactPoint,
  ...deleteContactPoint
}
