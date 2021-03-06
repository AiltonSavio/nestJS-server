import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { CreateUserInput, UpdateUserInput } from './user.input';
import { User } from './user.schema';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.userService.create(input);
  }

  @Query(() => User)
  async readUser(@Args('_id', { type: () => String }) _id: Types.ObjectId) {
    return this.userService.read(_id);
  }

  @Mutation(() => User)
  async updateUser(@Args('input') input: UpdateUserInput) {
    return this.userService.update(input);
  }

  @Mutation(() => User)
  async deleteUser(@Args('_id', { type: () => String }) _id: Types.ObjectId) {
    return this.userService.delete(_id);
  }

  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }
}
