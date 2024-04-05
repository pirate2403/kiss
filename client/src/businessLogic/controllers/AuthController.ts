"use client";

import UserStore from "@/businessLogic/stores/UserStore";
import ErrorStore from "@/businessLogic/stores/ErrorStore";
import {
  UserLoginData,
  UserRegistrationData,
} from "@/businessLogic/api/auth/interfaces";
import AuthApi from "@/businessLogic/api/auth";
import LocalStorageService from "@/businessLogic/services/LocalStorageService";
import { TOKEN_TYPE } from "@/businessLogic/constants/token";

export default class AuthController {
  private api = new AuthApi();

  constructor(
    private userStore: UserStore,
    private errorStore: ErrorStore,
  ) {}

  public login = async (
    value: UserLoginData,
    cb?: () => void,
  ): Promise<void> => {
    try {
      this.userStore.isLoading = true;
      const { accessToken } = await this.api.login(value);
      LocalStorageService.set(TOKEN_TYPE.access, accessToken);
      this.userStore.isLoading = false;
      this.userStore.isAuthenticated = true;
      cb?.();
    } catch (e) {
      this.errorStore.error = e instanceof Error ? e.message : "Error";
    }
  };

  public registration = async (
    value: UserRegistrationData,
    cb?: () => void,
  ): Promise<void> => {
    try {
      console.log("registration");
      this.userStore.isLoading = true;
      const { accessToken } = await this.api.registration(value);
      LocalStorageService.set(TOKEN_TYPE.access, accessToken);
      this.userStore.isLoading = false;
      this.userStore.isAuthenticated = true;
      cb?.();
    } catch (e) {
      this.errorStore.error = e instanceof Error ? e.message : "Error";
    }
  };

  public logout = async (cb?: () => void): Promise<void> => {
    try {
      this.userStore.isLoading = true;
      await this.api.logout();
      LocalStorageService.remove(TOKEN_TYPE.access);
      this.userStore.isLoading = false;
      this.userStore.isAuthenticated = false;
      cb?.();
    } catch (e) {
      this.errorStore.error = e instanceof Error ? e.message : "Error";
    }
  };
}
