import mongoose, { Schema, Document } from "mongoose";
import { IMessage } from "./Message";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  verificationCode: string;
  verifyExpiry: Date;
  isAcceptingMessages: boolean;
  message: IMessage[]
}

export const UserSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verificationCode: {
    type: String,
    required: true,
  },
  verifyExpiry: {
    type: Date,
    required: true,
  },
  isAcceptingMessages: {
    type: Boolean,
    required: true,
  },
})