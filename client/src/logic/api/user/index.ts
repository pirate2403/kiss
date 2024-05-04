import BaseApi from "@/logic/api/base";
import { User } from "@/logic/api/user/interfaces";

export default class UserApi extends BaseApi {
  public async getUser(): Promise<User> {
    const { data } = await this.axios.get<User>("/user");
    return data;
  }
}
