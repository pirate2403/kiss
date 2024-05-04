import api from "@/logic/api";
import { UserStore } from "@/logic/stores/UserStore";
import { ErrorStore } from "@/logic/stores/ErrorStore";
import { User } from "@/logic/api/user/interfaces";

class UserController {
  private _api = api.user;
  private userStore = UserStore.getInstance();
  private errorStore = ErrorStore.getInstance();

  public async getServerSideUserData(): Promise<User | null> {
    try {
      return await api.user.getUser();
    } catch {
      return null;
    }
  }
}

const controller = new UserController();

export default function useUserController() {
  return controller;
}
