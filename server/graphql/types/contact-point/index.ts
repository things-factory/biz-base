import { ContactPoint } from './contact-point'
import { ContactPointList } from './contact-point-list'
import { ContactPointPatch } from './contact-point-patch'
import { NewContactPoint } from './new-contact-point'

export const Mutation = `
  createContactPoint (
    contactPoint: NewContactPoint!
  ): ContactPoint @priviledge(priviledge: "mutation")

  updateContactPoint (
    name: String!
    patch: ContactPointPatch!
  ): [ContactPoint] @priviledge(priviledge: "mutation")

  updateMultipleContactPoint (
    patches: [ContactPointPatch]!
  ): [ContactPoint] @priviledge(priviledge: "mutation")

  deleteContactPoint (
    name: String!
  ): ContactPoint @priviledge(priviledge: "mutation")

  deleteContactPoints (
    names: [String]!
  ): Boolean @priviledge(priviledge: "mutation")
`

export const Query = `
  contactPoints(filters: [Filter], pagination: Pagination, sortings: [Sorting]): ContactPointList @priviledge(priviledge: "query")
  contactPoint(name: String!): ContactPoint @priviledge(priviledge: "query")
`

export const Types = [ContactPoint, NewContactPoint, ContactPointPatch, ContactPointList]
