import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { AdEntity } from "../entities/Ad";

@InputType()
class AdInput {
  @Field()
  title!: string;

  @Field()
  description!: string;

  @Field()
  owner!: string;

  @Field()
  price!: number;

  @Field()
  pictureUrl?: string;

  @Field()
  location!: string;
}

@Resolver(AdEntity)
export class AdResolver {
  @Query(() => [AdEntity])
  async ads() {
    const ads = await AdEntity.find();
    return ads;
  }
}
