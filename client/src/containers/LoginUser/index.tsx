"use client";

import { memo } from "react";
import MainLogo from "@/ui-kit/MainLogo";
import LoginForm from "@/components/LoginForm";
import Box from "@/ui-kit/Box";
import { UserLoginData } from "@/businessLogic/api/auth/interfaces";
import useController from "@/businessLogic/hooks/useController";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/businessLogic/constants/routes";

function LoginUser() {
  const router = useRouter();
  const { login } = useController((root) => root.authController);

  const onSubmit = (value: UserLoginData) => {
    void login(value, () => {
      router.push(ROUTES.main);
    });
  };

  return (
    <Box className="w-full my-auto flex flex-col items-center gap-8">
      <MainLogo />
      <LoginForm onSubmit={onSubmit} />
    </Box>
  );
}

export default memo(LoginUser);
