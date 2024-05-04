import { inject, singleton } from "tsyringe";
import bind from "bind-decorator";
import { NextFunction, Request, Response } from "express";
import {
  IController,
  IControllerMatcher,
} from "../../../interfaces/controller.interfaces";
import UserService from "../service/user.service";
import { IUserService } from "../service/user-service.interface";
import RESPONSE_STATUS from "../../../constants/response-status.const";
import { IMiddleware } from "../../../interfaces/middleware.interfaces";
import TokenValidatorMiddleware from "../../../middlewares/token-validator.middleware";
import ROUTER_METHOD from "../../../constants/router-method.const";
import TokenService from "../../../services/token/token.service";
import { ITokenService } from "../../../services/token/token-service.interface";

@singleton()
class UserController implements IController {
  static readonly token = "UserController";

  private _matchers: IControllerMatcher[] = [
    {
      method: ROUTER_METHOD.get,
      path: "/user",
      handlers: [this._tokenValidator.handle, this.getUserData],
    },
  ];

  constructor(
    @inject(TokenService.token) private _tokenService: ITokenService,
    @inject(UserService.token) private _userService: IUserService,
    @inject(TokenValidatorMiddleware.token)
    private _tokenValidator: IMiddleware,
  ) {}

  get matchers(): IControllerMatcher[] {
    return this._matchers;
  }

  @bind
  private async getUserData(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { authorization = "" } = req.headers;
      const resData = await this._userService.getUserData(authorization);
      res.status(RESPONSE_STATUS.success);
      res.json(resData);
    } catch (e) {
      next(e);
    }
  }
}

export default {
  token: UserController.token,
  useClass: UserController,
};
