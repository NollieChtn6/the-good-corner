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
  }
}`);