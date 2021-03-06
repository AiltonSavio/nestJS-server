import { Field, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Number)
  age: number;
}

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => Number, { nullable: true })
  age: number;
}
