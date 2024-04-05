"use client";

import { memo } from "react";
import MainLogo from "@/ui-kit/MainLogo";
import Box from "@/ui-kit/Box";
import RegisterForm from "@/components/RegisterForm";
import { UserRegistrationData } from "@/businessLogic/api/auth/interfaces";
import useController from "@/businessLogic/hooks/useController";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/businessLogic/constants/routes";

function RegisterUser() {
  const router = useRouter();
  const { registration } = useController((root) => root.authController);
  const onSubmit = (value: UserRegistrationData) => {
    void registration(value, () => {
      router.push(ROUTES.main);
    });
  };

  return (
    <Box className="w-full my-auto flex flex-col items-center gap-8">
      <MainLogo />
      <RegisterForm onSubmit={onSubmit} />
    </Box>
  );
}

export default memo(RegisterUser);
