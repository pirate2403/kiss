import { makeAutoObservable } from "mobx";

export default class UserStore {
  private _isAuthenticated: boolean = false;
  private _isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
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
