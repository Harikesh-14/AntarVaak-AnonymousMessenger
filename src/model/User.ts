import mongoose, { Schema, Document } from "mongoose";
import { IMessage, MessageSchema } from "./Message";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  verificationCode: string;
  verifyExpiry: Date;
  isVerified: boolean;
  isAcceptingMessages: boolean;
  messages: IMessage[]
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
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Invalid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verificationCode: {
    type: String,
    required: [true, "Verification code is required"],
  },
  verifyExpiry: {
    type: Date,
    required: [true, "Verification expiry is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema],
})

const UserModel = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>("User", UserSchema);

export default UserModel;