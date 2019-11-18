import * as Bizplace from './bizplace'
import * as Company from './company'
import * as ContactPoint from './contact-point'
import * as Partner from './partner'
import * as Worker from './worker'

export const queries = [Bizplace.Query, Company.Query, ContactPoint.Query, Worker.Query, Partner.Query]

export const mutations = [Bizplace.Mutation, Company.Mutation, ContactPoint.Mutation, Worker.Mutation, Partner.Mutation]
