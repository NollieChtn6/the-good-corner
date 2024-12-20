import { Arg, Field, InputType, Mutation, Query, Resolver, ID } from "type-graphql";
import { AdEntity } from "../entities/Ad";
import { CategoryEntity } from "../entities/Category";
import { TagEntity } from "../entities/Tag";
import { In } from "typeorm";

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

  @Field(() => ID, { nullable: false })
  category!: number;

  @Field(() => [ID])
  tags!: TagEntity[] | [];
}

@Resolver(AdEntity)
export class AdResolver {
  @Query(() => [AdEntity])
  async ads(): Promise<AdEntity[]> {
    const ads = await AdEntity.find({ relations: ["category", "tags"] });
    return ads;
  }

  @Query(() => AdEntity)
  async adById(@Arg("id") id: number): Promise<AdEntity> {
    const selectedAd = await AdEntity.findOneOrFail({
      where: { id },
      relations: ["category", "tags"],
    });
    if (!selectedAd) {
      throw new Error("Ad not found!");
    }
    return selectedAd;
  }

  @Mutation(() => AdEntity)
  async createAd(@Arg("adInput") adInput: AdInput): Promise<AdEntity> {
    let newAd = new AdEntity();
    newAd = Object.assign(newAd, adInput);
    const category = await CategoryEntity.findOneByOrFail({ id: adInput.category });
    const tags = await TagEntity.findBy({ id: In(adInput.tags) });
    newAd.category = category;
    newAd.tags = tags;
    await newAd.save();
    return newAd;
  }

  @Mutation(() => String)
  async deleteAd(@Arg("id") id: number): Promise<string> {
    const selectedAd = await AdEntity.findOneByOrFail({ id });
    if (!selectedAd) {
      throw new Error("Ad not found!");
    }
    const result = await AdEntity.delete(selectedAd.id);
    if (result.affected === 0) {
      return "Something went wrong!";
    }
    return "Ad deleted successfully!";
  }

  @Mutation(() => AdEntity)
  async replaceAdById(@Arg("id") id: number, @Arg("data") data: AdInput): Promise<AdEntity> {
    let selectedAd = await AdEntity.findOneByOrFail({ id });
    if (!selectedAd) {
      throw new Error("Ad not found!");
    }
    selectedAd = Object.assign(selectedAd, data);
    const category = await CategoryEntity.findOneByOrFail({ id: data.category });
    const tags = await TagEntity.findBy({ id: In(data.tags) });
    selectedAd.category = category;
    selectedAd.tags = tags;
    selectedAd.updatedAt = new Date();

    await selectedAd.save();
    return selectedAd;
  }
}
