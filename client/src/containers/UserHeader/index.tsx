import Header from "@/components/Header";
import { memo } from "react";
import useUserController from "@/logic/controllers/UserController";

async function UserHeader() {
  const userController = useUserController();
  const userData = await userController.getServerSideUserData();

  return <Header backButtonHref={-1} userData={userData} />;
}

export default memo(UserHeader);
