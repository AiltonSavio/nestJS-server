import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop({ unique: true })
  email: string;

  @Field(() => Number)
  @Prop()
  age: number;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
