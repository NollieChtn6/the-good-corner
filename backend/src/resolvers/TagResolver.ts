import { Query, Resolver, Arg } from "type-graphql";
import { TagEntity } from "../entities/Tag";

@Resolver(TagEntity)
export class TagResolver {
  @Query(() => [TagEntity])
  async tags(): Promise<TagEntity[]> {
    const tags = await TagEntity.find();
    return tags;
  }
}
