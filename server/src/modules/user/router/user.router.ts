import { Router } from "express";
import { inject, singleton } from "tsyringe";
import { IRouter } from "../../../interfaces/router.interface";
import { IController } from "../../../interfaces/controller.interfaces";
import UserController from "../controller/user.controller";

@singleton()
class UserRouter implements IRouter {
  static readonly token = "UserRouter";

  private _expressRouter: Router = Router();

  constructor(
    @inject(UserController.token)
    private _userController: IController,
  ) {
    this._init();
  }

  private _init(): void {
    this._userController.matchers.forEach((item) => {
      this._expressRouter[item.method](item.path, item.handlers);
    });
  }

  get expressRouter(): Router {
    return this._expressRouter;
  }
}

export default {
  token: UserRouter.token,
  useClass: UserRouter,
};
