import { UserRegistrationData } from "@/logic/api/auth/interfaces";
import { isEmail, isLength } from "validator";

export function registerFormValidator({
  email = "",
  password = "",
  name = "",
}: UserRegistrationData) {
  const isNameValid = isLength(name, { min: 3 });
  const isEmailValid = isEmail(email);
  const isPasswordValid = isLength(password, { min: 6 });

  if (isEmailValid && isEmailValid && isPasswordValid) return;

  return {
    email: isEmailValid ? "" : "Email is not correct",
    password: isPasswordValid ? "" : "Password is not correct",
    name: isNameValid ? "" : "Name is not correct",
  };
}
