"use client";

import { memo } from "react";
import MainLogo from "@/ui-kit/MainLogo";
import LoginForm from "@/components/LoginForm";
import { UserLoginData } from "@/logic/api/auth/interfaces";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/logic/constants/routes";
import useAuthController from "@/logic/controllers/AuthController";

function UserLogin() {
  const router = useRouter();
  const { login } = useAuthController();

  const onSubmit = (value: UserLoginData) => {
    void login(value, () => {
      router.push(ROUTES.main);
    });
  };

  return (
    <div className="w-full my-auto flex flex-col items-center gap-8">
      <MainLogo />
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default memo(UserLogin);
