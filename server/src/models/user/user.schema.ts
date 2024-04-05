import { Schema } from "mongoose";
import { IUser } from "./user.interfaces";

const userSchema = new Schema<IUser>({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

export default userSchema;
