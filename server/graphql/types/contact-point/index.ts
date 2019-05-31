import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { ContactPoint } from './contact-point'
import { ContactPointList } from './contact-point-list'
import { ContactPointPatch } from './contact-point-patch'
import { NewContactPoint } from './new-contact-point'

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
  contactPoints(filters: [Filter], pagination: Pagination, sortings: [Sorting]): ContactPointList
  contactPoint(id: String!): ContactPoint
`

export const Types = [Filter, Pagination, Sorting, ContactPoint, NewContactPoint, ContactPointPatch, ContactPointList]
