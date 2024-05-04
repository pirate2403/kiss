import { inject, singleton } from "tsyringe";
import bind from "bind-decorator";
import { IUserService } from "./user-service.interface";
import {
  IExtendedUserData,
  IUserModel,
} from "../../../models/user/user.interfaces";
import UserModel from "../../../models/user/user.model";
import TokenModel from "../../../models/token/token.model";
import { ITokenModel } from "../../../models/token/token.interfaces";
import ErrorService from "../../../services/error/error.service";
import { IErrorService } from "../../../services/error/error-service.interfaces";
import TokenService from "../../../services/token/token.service";
import { ITokenService } from "../../../services/token/token-service.interface";
import { VERIFY_TYPE } from "../../../services/token/token.constants";
import { IUserResponseData } from "../interfaces/user.interfaces";

@singleton()
class UserService implements IUserService {
  static readonly token = "UserService";

  constructor(
    @inject(TokenService.token) private _tokenService: ITokenService,
    @inject(UserModel.token) private _userModel: IUserModel,
    @inject(TokenModel.token) private _tokenModel: ITokenModel,
    @inject(ErrorService.token) private _errorService: IErrorService,
  ) {}

  @bind
  public async getUserData(authorization: string): Promise<IUserResponseData> {
    const token = this._tokenService.getAuthorizationToken(authorization);
    const extendedUser = this._tokenService.verify<IExtendedUserData>(
      token,
      VERIFY_TYPE.access,
    );
    const user = this._userModel.parseUserFromExtendedUserData(extendedUser);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}

export default {
  token: UserService.token,
  useClass: UserService,
};
