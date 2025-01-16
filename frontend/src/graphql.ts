import { initGraphQLTada } from "gql.tada";
import type { introspection } from "./graphql-env";

export const graphql = initGraphQLTada<{
	introspection: introspection;
	scalars: {
		DateTimeISO: Date;
		DateTime: Date;
		Float: number;
		String: string;
		ID: number;
	};
}>();

export type { FragmentOf, ResultOf, VariablesOf } from "gql.tada";
export { readFragment } from "gql.tada";
