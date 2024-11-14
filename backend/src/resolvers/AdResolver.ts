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
    if (!selectedAd) {
      throw new Error("Ad not found!");
    }
    return selectedAd;
  }

  @Mutation(() => AdEntity)
  async createAd(@Arg("ad") { title, description, price, location, owner, pictureUrl }: AdInput) {
    let newAd = new AdEntity();
    newAd = Object.assign(newAd, { title, description, price, location, owner, pictureUrl });
    await newAd.save();
    return newAd;
  }

  @Mutation(() => Boolean)
  async deleteAd(@Arg("id") id: number) {
    const selectedAd = await AdEntity.findOneByOrFail({ id });
    if (!selectedAd) {
      throw new Error("Ad not found!");
    }
    const result = await AdEntity.delete(selectedAd.id);
    if (result) {
      return true;
    }
  }

  @Mutation(() => AdEntity)
  async replaceAdById(@Arg("id") id: number, @Arg("data") data: AdInput) {
    let selectedAd = await AdEntity.findOneByOrFail({ id });
    if (!selectedAd) {
      throw new Error("Ad not found!");
    }
    selectedAd = Object.assign(selectedAd, data);
    selectedAd.updatedAt = new Date();

    await selectedAd.save();
    return selectedAd;
  }
}
