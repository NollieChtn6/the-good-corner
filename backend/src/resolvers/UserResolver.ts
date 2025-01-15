import { Arg, Field, InputType, Mutation, Query, Resolver, Ctx, Authorized } from "type-graphql";
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
    if (!JWT_SECRET) {
      throw new Error("No JWT secret defined in the environment");
    }

    const hashedPassword = await argon.hash(newUserData.password);
    // Create user in database
    const user = await UserEntity.create({
      username: newUserData.username,
      email: newUserData.email,
      password: hashedPassword,
      role: "USER",
    }).save();

    /* 
      Define token content: y adding 'role' to the token content, 
      we can use it in the authChecker function to allow or deny access to protected resources.
    */
    const tokenContent = { email: user.email, username: user.username, role: user.role };

    // Create token
    const token = jwt.sign(tokenContent, JWT_SECRET as string);
    // Set token in cookie
    res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "strict" });

    // Return user profile
    const userProfile = {
      username: user.username,
      email: user.email,
    };

    return JSON.stringify(userProfile);
  }

  @Mutation(() => String)
  async loginUser(@Arg("userData") userData: UserInput, @Ctx() { res }: { res: Response }) {
    if (!JWT_SECRET) {
      throw new Error("No JWT secret defined in the environment");
    }

    // Find user in database
    const user = await UserEntity.findOneByOrFail({ email: userData.email });

    // Verify password
    const passwordIsValid = await argon.verify(user.password, userData.password);
    if (!passwordIsValid) {
      throw new Error("Invalid credentials!");
    }

    /* 
      Define token content: y adding 'role' to the token content, 
      we can use it in the authChecker function to allow or deny access to protected resources.
    */
    const tokenContent = { email: user.email, username: user.username, role: user.role };

    // Create token
    const token = jwt.sign(tokenContent, JWT_SECRET);
    // Set token in cookie
    res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "strict" });

    // Return user profile
    const userProfile = {
      email: user.email,
      username: user.username,
    };
    return JSON.stringify(userProfile);
  }

  // This query is protected and can only be accessed by connected users
  @Authorized()
  @Query(() => [UserEntity])
  async usersAsUser() {
    const users = await UserEntity.find();
    return users;
  }
}
