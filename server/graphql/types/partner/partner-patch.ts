import { gql } from 'apollo-server-koa'

export const PartnerPatch = gql`
  input PartnerPatch {
    name: String
    description: String
  }
`
