import gql from 'graphql-tag'

export const CompanyPatch = gql`
  input CompanyPatch {
    id: String
    name: String
    description: String
    countryCode: String
    brn: String
    address: String
    postalCode: String
    status: String
    cuFlag: String
  }
`
