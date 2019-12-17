import gql from 'graphql-tag'

export const NewBizplaceRole = gql`
  input NewBizplaceRole {
    domain: ObjectRef!
    bizplace: ObjectRef!
    roles: [ObjectRef]!
  }
`
