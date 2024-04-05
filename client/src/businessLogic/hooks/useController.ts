import controllers from "@/businessLogic/controllers";

type Controllers = typeof controllers;
type Controller = Controllers[keyof typeof controllers];
type Callback = (controllers: Controllers) => Controller;

function useController(cb: Callback): Controller {
  return cb(controllers);
}

export default useController;
