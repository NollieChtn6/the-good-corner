import type { ResultOf } from "../graphql";
import { graphql } from "../graphql";

export const CREATE_AD_MUTATION = graphql(`
  mutation CreateAd($adInput: AdInput!) {
    createAd(adInput: $adInput) {
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
      tags {
        label
      }
    }
  }`);

export type CreateAdMutationResult = ResultOf<typeof CREATE_AD_MUTATION>;
