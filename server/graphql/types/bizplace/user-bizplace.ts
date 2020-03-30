import gql from 'graphql-tag'

export const UserBizplace = gql`
  type UserBizplace {
    id: String
    name: String
    description: String
    assigned: Boolean
    userBizplaceId: String
    mainBizplace: Boolean
  }
`
