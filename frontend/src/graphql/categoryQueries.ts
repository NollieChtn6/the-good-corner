import type { ResultOf } from "gql.tada";
import { graphql } from "../graphql";

export const CATEGORIES_QUERY = graphql(`
query Categories {
  categories {
    id
    name
  }
}
`);

export type CategoriesQueryResult = ResultOf<typeof CATEGORIES_QUERY>;
