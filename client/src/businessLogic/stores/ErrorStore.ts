import { makeAutoObservable } from "mobx";

export default class ErrorStore {
  private _error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get error(): string | null {
    return this._error;
  }

  set error(value: string | null) {
    this._error = value;
  }
}
