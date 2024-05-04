import { makeAutoObservable } from "mobx";
import { User } from "@/logic/api/user/interfaces";
// @ts-ignore
import { enableStaticRendering } from "mobx-react-lite/lib/staticRendering";
import checkClientSideRender from "@/utils/checkClientSideRender";

enableStaticRendering(checkClientSideRender());

export class UserStore {
  private static _instance: UserStore;
  private _isAuthenticated: boolean = false;
  private _isLoading: boolean = false;
  private _userData: User | null = null;

  private constructor() {
    makeAutoObservable(this);
  }

  public static getInstance(): UserStore {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new UserStore();
    return this._instance;
  }

  get userData(): User | null {
    return this._userData;
  }

  set userData(value: User) {
    this._userData = value;
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
    this._isLoading = value;
  }
}

export default function useUserStore(): UserStore {
  return UserStore.getInstance();
}
