import BaseApi from "@/businessLogic/api/base";
import {
  AuthResponseData,
  UserLoginData,
  UserRegistrationData,
} from "@/businessLogic/api/auth/interfaces";

export default class AuthApi extends BaseApi {
  public async login(payload: UserLoginData): Promise<AuthResponseData> {
    const { data } = await this.axios.post<AuthResponseData>("/login", payload);
    return data;
  }

  public async registration(
    payload: UserRegistrationData,
  ): Promise<AuthResponseData> {
    const { data } = await this.axios.post<AuthResponseData>(
      "/registration",
      payload,
    );
    return data;
  }

  public async logout(): Promise<void> {
    const { data } = await this.axios.post<void>("/logout");
    return data;
  }
}
