import gql from 'graphql-tag'

export const NewWorker = gql`
  input NewWorker {
    bizplace: ObjectRef!
    name: String!
    type: String!
    description: String
  }
`
