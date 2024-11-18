import type { ResultOf } from "gql.tada";
import { graphql } from "../graphql";

export const ADS_QUERY = graphql(`
  query AdsQuery {
    ads {
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
        id
        name
      }
      tags {
        id
        label
      }
    }
  }
`);

export type AdsQueryResult = ResultOf<typeof ADS_QUERY>;

export const AD_BY_ID_QUERY = graphql(`
    query AdById($adByIdId: Float!) {
      adById(id: $adByIdId) {
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
          id
          name
        }
        tags {
          id
          label
        }
      }
    }`);

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

export const CATEGORIES_AND_TAGS_QUERY = graphql(`
  query CategoriesAndTags {
    categories {
      id
      name
    }
    tags {
      id
      label
    }
  }
  `);
