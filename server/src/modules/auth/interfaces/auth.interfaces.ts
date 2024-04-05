import {
  IUserCreatePayload,
  IUserLoginPayload,
} from "../../../models/user/user.interfaces";

export interface IAuthResponseData {
  accessToken: string;
}

export interface IRegistrationData {
  accessToken: string;
  refreshToken: string;
}

export interface IRegistrationPayload extends IUserCreatePayload {
  name: string;
}

export interface ILoginData {
  accessToken: string;
  refreshToken: string;
}

export interface ILoginPayload extends IUserLoginPayload {}

export interface IRefreshData {
  accessToken: string;
  refreshToken: string;
}
