import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { initializeDataSource } from "./config/db";
import { AdResolver } from "./resolvers/AdResolver";
import { CategoryResolver } from "./resolvers/CategoryResolver";
import { TagResolver } from "./resolvers/TagResolver";
import { UserResolver } from "./resolvers/UserResolver";

const PORT = 4000;

const startServer = async () => {
  await initializeDataSource();
  const schema = await buildSchema({
    resolvers: [AdResolver, CategoryResolver, TagResolver, UserResolver],
    authChecker: ({ context }, authorizedRoles) => {
      // No one can access protected resources
      // return false;
      // Everyone can access protected resources
      // return true;
      /* 
				Only connected users can access protected resources.
				Even if all users have a defined role in database, 
				'role' is included in the token content *only* after registration/login.
			 */
      // if (!context.user.role) {
      //   return false;
      // }
      // return true;

      // Only users with the roles defined in 'authorizedRoles' can access protected resources
      if (!authorizedRoles.includes(context.user?.role)) {
        return false;
      }
      return true;
    },
  });
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
    context: async ({ res }) => {
      // console.log("Server has received request");
      return { res };
    },
  });

  console.log(`Server ready at ${url}`);
};

startServer();
