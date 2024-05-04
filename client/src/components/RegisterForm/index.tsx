"use client";

import { memo } from "react";
import { useFormik } from "formik";
import { UserRegistrationData } from "@/logic/api/auth/interfaces";
import { registerFormValidator } from "@/components/RegisterForm/validator";
import Input from "@/ui-kit/Input";
import Button from "@/ui-kit/Button";

interface Props {
  onSubmit?: (values: UserRegistrationData) => void;
}

const INIT_VALUES = {
  password: "",
  email: "",
  name: "",
};

function RegisterForm({ onSubmit }: Props) {
  const form = useFormik<UserRegistrationData>({
    onSubmit: (values) => {
      onSubmit?.(values);
    },
    validate: registerFormValidator,
    initialValues: INIT_VALUES,
  });

  const { errors, submitCount, handleChange, handleSubmit, values } = form;

  return (
    <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
      <Input
        defaultValue={values.name}
        name="name"
        label="Name"
        placeholder="Name"
        error={!!errors.name && submitCount > 0}
        onChange={handleChange}
      />

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
        Create an account
      </Button>
    </form>
  );
}

export default memo<Props>(RegisterForm);
