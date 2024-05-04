"use client";

import { memo } from "react";
import Button from "@/ui-kit/Button";
import useAuthController from "@/logic/controllers/AuthController";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/logic/constants/routes";

function LogoutButton() {
  const router = useRouter();
  const { logout } = useAuthController();

  const onLogout = () => {
    void logout(() => {
      router.push(ROUTES.login);
    });
  };

  return (
    <Button customType="ghost" size="content" onClick={onLogout}>
      <span className="text-error text-[14px]">Logout</span>
    </Button>
  );
}

export default memo(LogoutButton);
