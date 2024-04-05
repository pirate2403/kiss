import { inject, singleton } from "tsyringe";
import {
  IController,
  IControllerMatcher,
} from "../../../interfaces/controller.interfaces";
import UserService from "../service/user.service";
import { IUserService } from "../service/user-service.interface";

@singleton()
class UserController implements IController {
  static readonly token = "UserController";

  private _matchers: IControllerMatcher[] = [];

  constructor(@inject(UserService.token) private _userService: IUserService) {}

  get matchers(): IControllerMatcher[] {
    return this._matchers;
  }
}

export default {
  token: UserController.token,
  useClass: UserController,
};
