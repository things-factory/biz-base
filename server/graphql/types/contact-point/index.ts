import { ContactPoint } from './contact-point'
import { ContactPointList } from './contact-point-list'
import { ContactPointPatch } from './contact-point-patch'
import { NewContactPoint } from './new-contact-point'
import { directivePriviledge } from '@things-factory/auth-base'

export const Mutation = `
  createContactPoint (
    contactPoint: NewContactPoint!
  ): ContactPoint @priviledge(category: "contact_point", priviledge: "mutation")

  updateContactPoint (
    name: String!
    patch: ContactPointPatch!
  ): [ContactPoint] @priviledge(category: "contact_point", priviledge: "mutation")

  updateMultipleContactPoint (
    patches: [ContactPointPatch]!
  ): [ContactPoint] @priviledge(category: "contact_point", priviledge: "mutation")

  deleteContactPoint (
    name: String!
  ): ContactPoint @priviledge(category: "contact_point", priviledge: "mutation")

  deleteContactPoints (
    names: [String]!
  ): Boolean @priviledge(category: "contact_point", priviledge: "mutation")
`

export const Query = `
  contactPoints(filters: [Filter], pagination: Pagination, sortings: [Sorting]): ContactPointList @priviledge(category: "contact_point", priviledge: "query")
  contactPoint(name: String!): ContactPoint @priviledge(category: "contact_point", priviledge: "query")
`

export const Types = [ContactPoint, NewContactPoint, ContactPointPatch, ContactPointList]
