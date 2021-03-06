import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserInput, UpdateUserInput } from './user.input';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(input: CreateUserInput) {
    return this.userModel.create(input);
  }

  read(_id: Types.ObjectId) {
    return this.userModel.findById(_id).exec();
  }

  update(input: UpdateUserInput) {
    return this.userModel
      .findByIdAndUpdate(input._id, input, { new: true })
      .exec();
  }

  delete(_id: Types.ObjectId) {
    return this.userModel.findByIdAndDelete(_id).exec();
  }

  findAll() {
    return this.userModel.find().exec();
  }
}
