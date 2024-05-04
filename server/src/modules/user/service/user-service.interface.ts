import { IUserResponseData } from "../interfaces/user.interfaces";

export interface IUserService {
  getUserData(authorization: string): Promise<IUserResponseData>;
}
