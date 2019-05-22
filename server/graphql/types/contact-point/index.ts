import { ContactPoint } from './contact-point'
import { NewContactPoint } from './new-contact-point'
import { ContactPointPatch } from './contact-point-patch'

export const Mutation = `
  createContactPoint (
    contactPoint: NewContactPoint!
  ): ContactPoint

  updateContactPoint (
    id: String!
    patch: ContactPointPatch!
  ): ContactPoint

  deleteContactPoint (
    id: String!
  ): ContactPoint
`

export const Query = `
  contactPoints: [ContactPoint]
  contactPoint(id: String!): ContactPoint
`

export const Types = [ContactPoint, NewContactPoint, ContactPointPatch]
