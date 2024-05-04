"use client";

import { memo } from "react";
import { useFormik } from "formik";
import { UserLoginData } from "@/logic/api/auth/interfaces";
import { loginFormValidator } from "@/components/LoginForm/validator";
import Input from "@/ui-kit/Input";
import Button from "@/ui-kit/Button";

interface Props {
  onSubmit?: (values: UserLoginData) => void;
}

const INIT_VALUES = {
  email: "Kiss@mail.com",
  password: "Kiss12",
};

function LoginForm({ onSubmit }: Props) {
  const form = useFormik<UserLoginData>({
    onSubmit: (values) => {
      onSubmit?.(values);
    },
    validate: loginFormValidator,
    initialValues: INIT_VALUES,
  });

  const { errors, submitCount, handleChange, values, handleSubmit } = form;

  return (
    <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
      <Input
        defaultValue={values.email}
        name="email"
        label="Email"
        placeholder="E-mail"
        error={!!errors.email && submitCount > 0}
        onChange={handleChange}
      />

      <Input
        defaultValue={values.password}
        name="password"
        label="Password"
        placeholder="Password"
        error={!!errors.password && submitCount > 0}
        onChange={handleChange}
      />

      <Button className="w-full mt-8" type="submit">
        Login
      </Button>
    </form>
  );
}

export default memo<Props>(LoginForm);
