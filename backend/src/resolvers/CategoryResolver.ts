import { Query, Resolver } from "type-graphql";
import { CategoryEntity } from "../entities/Category";

@Resolver(CategoryEntity)
export class CategoryResolver {
  @Query(() => [CategoryEntity])
  async categories(): Promise<CategoryEntity[]> {
    const categories = await CategoryEntity.find();
    return categories;
  }
}
