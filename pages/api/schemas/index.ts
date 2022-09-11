import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    id: ID
    name: String
  }

  type Query {
    getUser: [User]
    hello: String
  }
`;