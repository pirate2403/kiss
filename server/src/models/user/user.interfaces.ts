import { Types } from "mongoose";

export interface IUserModel {
  create(payload: IUserCreatePayload): Promise<IUser>;
  getUserByEmail(email: string): Promise<IUser | null>;
  remove(login: string): Promise<void>;
  parseUserFromExtendedUserData(data: IExtendedUserData): IUser;
}

export interface IExtendedUserData extends IUser {
  [k: string]: unknown;
}

export interface IUserLoginPayload {
  email: string;
  password: string;
}
export interface IUserCreatePayload {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
}
