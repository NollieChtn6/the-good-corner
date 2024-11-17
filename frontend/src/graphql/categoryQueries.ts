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

export const CATEGORY_BY_ID_QUERY = graphql(`
    query CategoryById($categoryByIdId: Float!) {
      categoryById(id: $categoryByIdId) {
        id
        name
      }
    }
`);

export const ADS_BY_CATEGORY_QUERY = graphql(`
  query AdsByCategory($categoryId: Float!) {
    adsByCategory(categoryId: $categoryId) {
      id
      title
      description
      owner
      price
      pictureUrl
      location
      createdAt
      updatedAt
      category {
        name
      }
    }
  }
`);
