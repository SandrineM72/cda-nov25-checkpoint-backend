// idem index.ts TGC

import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { dataSource } from "./config/db";
import { CountryResolver } from "./resolvers/CountryResolver";

async function start() {
  await dataSource.initialize();
  console.log("Base de données connectée");

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
  });

  console.log(`🚀 Serveur prêt sur ${url}`);
}

start();