import { registry, singleton } from "tsyringe";
import UserRouter from "./router/user.router";
import UserController from "./controller/user.controller";
import UserService from "./service/user.service";

@singleton()
@registry([UserController, UserRouter, UserService])
class UserModule {
  static readonly token = "UserModule";
}

export default {
  token: UserModule.token,
  useClass: UserModule,
};
