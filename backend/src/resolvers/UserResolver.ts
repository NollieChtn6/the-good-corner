import { Arg, Field, InputType, Mutation, Query, Resolver, ID } from "type-graphql";
import { In } from "typeorm";
import { UserEntity } from "../entities/User";

@InputType()
class NewUserInput {
  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;
}

@InputType()
class UserInput {
  @Field()
  email!: string;

  @Field()
  password!: string;
}

@Resolver(UserEntity)
export class UserResolver {
  @Query(() => [UserEntity])
  async users() {
    const users = await UserEntity.find();
    return users;
  }
}
