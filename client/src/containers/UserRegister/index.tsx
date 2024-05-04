"use client";

import { memo } from "react";
import MainLogo from "@/ui-kit/MainLogo";
import RegisterForm from "@/components/RegisterForm";
import { UserRegistrationData } from "@/logic/api/auth/interfaces";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/logic/constants/routes";
import useAuthController from "@/logic/controllers/AuthController";

function UserRegister() {
  const router = useRouter();
  const { registration } = useAuthController();

  const onSubmit = (value: UserRegistrationData) => {
    void registration(value, () => {
      router.push(ROUTES.main);
    });
  };

  return (
    <div className="w-full my-auto flex flex-col items-center gap-8">
      <MainLogo />
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
}

export default memo(UserRegister);
