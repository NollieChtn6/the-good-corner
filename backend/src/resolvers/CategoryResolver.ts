import { Query, Resolver, Arg } from "type-graphql";
import { CategoryEntity } from "../entities/Category";

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
}
