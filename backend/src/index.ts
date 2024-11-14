import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { initializeDataSource } from "./config/db";
import { AdResolver } from "./resolvers/AdResolver";

const PORT = 4000;

const startServer = async () => {
  await initializeDataSource();
  const schema = await buildSchema({
    resolvers: [AdResolver],
  });
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });

  console.log(`Server ready at ${url}`);
};

startServer();
