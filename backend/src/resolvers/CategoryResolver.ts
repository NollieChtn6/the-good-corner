import { Query, Resolver, Arg } from "type-graphql";
import { CategoryEntity } from "../entities/Category";
import { AdEntity } from "../entities/Ad";

@Resolver(CategoryEntity)
export class CategoryResolver {
  @Query(() => [CategoryEntity])
  async categories(): Promise<CategoryEntity[]> {
    const categories = await CategoryEntity.find();
    return categories;
  }

  @Query(() => CategoryEntity)
  async categortById(@Arg("id") id: number): Promise<CategoryEntity> {
    const selectedCategory = await CategoryEntity.findOneByOrFail({ id });
    if (!selectedCategory) {
      throw new Error("Category not found!");
    }
    return selectedCategory;
  }

  @Query(() => [AdEntity])
  async adsByCategory(@Arg("category") category: number): Promise<AdEntity[]> {
    const ads = await AdEntity.find({
      relations: {
        category: true,
      },
      where: {
        category: { id: category },
      },
    });
    return ads;
  }
}
