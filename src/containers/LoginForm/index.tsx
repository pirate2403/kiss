"use client";

import { memo } from "react";
import { useFormik } from "formik";
import Input from "@/ui-kit/Input";
import Button from "@/ui-kit/Button";

function LoginForm() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleSubmit, handleChange } = formik;

  return (
    <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
      <Input
        label="Email"
        name="email"
        placeholder="E-mail"
        onChange={handleChange}
      />
      <Input
        label="Password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <Button className="w-full" type="submit">
        Login
      </Button>
    </form>
  );
}

export default memo(LoginForm);
