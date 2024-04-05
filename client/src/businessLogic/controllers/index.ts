import AuthController from "@/businessLogic/controllers/AuthController";
import stores from "@/businessLogic/stores";

const controllers = {
  authController: new AuthController(stores.user, stores.error),
};

export default controllers;
