import { Arg, Field, InputType, Mutation, Query, Resolver, ID, Ctx } from "type-graphql";
import { In } from "typeorm";
import { UserEntity } from "../entities/User";
import type { Response } from "express";

import * as argon from "argon2";
import * as jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

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

  @Mutation(() => String)
  async createUser(
    @Arg("newUserData") newUserData: NewUserInput,
    @Ctx() { res }: { res: Response },
  ) {
    if (!process.env.JWT_SECRET) {
      throw new Error("No JWT secret defined in the environment");
    }

    const hashedPassword = await argon.hash(newUserData.password);
    // Create user in database
    const user = await UserEntity.create({
      username: newUserData.username,
      email: newUserData.email,
      password: hashedPassword,
    }).save();

    // Define token content
    const tokenContent = { email: user.email, username: user.username };

    const token = jwt.sign(tokenContent, JWT_SECRET as string);
    res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "strict" });

    const userProfile = {
      username: user.username,
      email: user.email,
    };

    return JSON.stringify(userProfile);
  }
}
