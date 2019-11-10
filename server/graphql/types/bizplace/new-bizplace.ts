import gql from 'graphql-tag'

export const NewBizplace = gql`
  input NewBizplace {
    name: String!
    company: ObjectRef!
    description: String
    address: String!
    postalCode: String!
    latlng: String!
    status: String
  }
`
