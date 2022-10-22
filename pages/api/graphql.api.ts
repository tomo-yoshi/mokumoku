import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer, gql } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { resolvers } from "./resolvers";
import fs from "fs";
import path from 'path';

const typeDefs = gql(fs.readFileSync(path.join(__dirname, '..', '..', '..', '..', 'pages/api/schemas/schema.graphql'), { encoding: 'utf8' }));

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};