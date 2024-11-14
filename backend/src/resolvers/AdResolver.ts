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

  @Query(() => AdEntity)
  async adById(@Arg("id") id: number) {
    const selectedAd = await AdEntity.findOneByOrFail({ id });
    return selectedAd;
  }

  @Mutation(() => AdEntity)
  async createAd(@Arg("ad") { title, description, price, location, owner, pictureUrl }: AdInput) {
    const newAd = new AdEntity();
    newAd.title = title;
    newAd.description = description;
    newAd.price = price;
    newAd.location = location;
    newAd.owner = owner;
    newAd.pictureUrl = pictureUrl;
    await newAd.save();
    return newAd;
  }

  @Mutation(() => AdEntity)
  async deleteAd(@Arg("id") id: number) {
    const selectedAd = await AdEntity.findOneByOrFail({ id });
    if (!selectedAd) {
      throw new Error("Ad not found!");
    }
    return await selectedAd.remove();
  }
}
