import { UserLoginData } from "@/logic/api/auth/interfaces";
import { isEmail, isLength } from "validator";

export function loginFormValidator({
  email = "",
  password = "",
}: UserLoginData) {
  const isEmailValid = isEmail(email);
  const isPasswordValid = isLength(password, { min: 6 });

  if (isEmailValid && isPasswordValid) return;

  return {
    email: isEmailValid ? "" : "Email is not correct",
    password: isPasswordValid ? "" : "Password is not correct",
  };
}
