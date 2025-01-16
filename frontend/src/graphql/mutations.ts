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

export const UPDATE_AD_MUTATION = graphql(`
  mutation ReplaceAdById($data: AdInput!, $replaceAdByIdId: Float!) {
    replaceAdById(data: $data, id: $replaceAdByIdId) {
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
  }
`);

export const DELETE_AD_MUTATION = graphql(`
  mutation DeleteAd($deleteAdId: Float!) {
    deleteAd(id: $deleteAdId)
  }
  `);

export const LOGIN_MUTATION = graphql(`
  mutation LoginUser($userData: UserInput!) {
  loginUser(userData: $userData)
  }`);

export type LoginMutationResult = ResultOf<typeof LOGIN_MUTATION>;
