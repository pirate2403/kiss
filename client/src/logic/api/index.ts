import UserApi from "@/logic/api/user";
import AuthApi from "@/logic/api/auth";

const api = {
  auth: new AuthApi(),
  user: new UserApi(),
};

export default api;
