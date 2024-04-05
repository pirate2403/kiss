import UserStore from "@/businessLogic/stores/UserStore";
import ErrorStore from "@/businessLogic/stores/ErrorStore";

const stores = {
  error: new ErrorStore(),
  user: new UserStore(),
};

export default stores;
