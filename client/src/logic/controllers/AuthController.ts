import {
  UserLoginData,
  UserRegistrationData,
} from "@/logic/api/auth/interfaces";
import api from "@/logic/api";
import tokenService from "@/logic/services/TokenService";
import { UserStore } from "@/logic/stores/UserStore";
import { ErrorStore } from "@/logic/stores/ErrorStore";

class AuthController {
  private api = api.auth;
  private userStore = UserStore.getInstance();
  private errorStore = ErrorStore.getInstance();

  public login = async (
    value: UserLoginData,
    cb?: () => void,
  ): Promise<void> => {
    try {
      this.userStore.isLoading = true;
      const { accessToken } = await this.api.login(value);
      tokenService.accessToken = accessToken;
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
      this.userStore.isLoading = true;
      const { accessToken } = await this.api.registration(value);
      tokenService.accessToken = accessToken;
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
      tokenService.removeAccessToken();
      this.userStore.isLoading = false;
      this.userStore.isAuthenticated = false;
      cb?.();
    } catch (e) {
      this.errorStore.error = e instanceof Error ? e.message : "Error";
    }
  };
}

const controller = new AuthController();

export default function useAuthController() {
  return controller;
}
