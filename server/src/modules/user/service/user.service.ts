import { inject, singleton } from "tsyringe";
import { IUserService } from "./user-service.interface";
import { IUserModel } from "../../../models/user/user.interfaces";
import UserModel from "../../../models/user/user.model";
import TokenModel from "../../../models/token/token.model";
import { ITokenModel } from "../../../models/token/token.interfaces";
import ErrorService from "../../../services/error/error.service";
import { IErrorService } from "../../../services/error/error-service.interfaces";

@singleton()
class UserService implements IUserService {
  static readonly token = "UserService";

  constructor(
    @inject(UserModel.token) private _userModel: IUserModel,
    @inject(TokenModel.token) private _tokenModel: ITokenModel,
    @inject(ErrorService.token) private _errorService: IErrorService,
  ) {}
}

export default {
  token: UserService.token,
  useClass: UserService,
};
