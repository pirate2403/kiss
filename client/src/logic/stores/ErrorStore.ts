import { makeAutoObservable } from "mobx";
import { UserStore } from "@/logic/stores/UserStore";

export class ErrorStore {
  private static instance: ErrorStore;
  private _error: string | null = null;

  private constructor() {
    makeAutoObservable(this);
  }

  public static getInstance(): ErrorStore {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ErrorStore();
    return this.instance;
  }

  get error(): string | null {
    return this._error;
  }

  set error(value: string | null) {
    this._error = value;
  }
}

export default function useErrorStore(): ErrorStore {
  return ErrorStore.getInstance();
}
