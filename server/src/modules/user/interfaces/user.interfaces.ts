import { IUser } from "../../../models/user/user.interfaces";

export interface IUserResponseData extends Omit<IUser, "password"> {}
