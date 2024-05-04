"use client";

import { memo, useCallback, useState } from "react";
import MenuIcon from "@/assets/icons/menu.svg";
import Button from "@/ui-kit/Button";
import { User } from "@/logic/api/user/interfaces";
import cn from "classnames";
import NavBar from "@/components/NavBar";
import Typography from "@/ui-kit/Typography";
import LogoutButton from "@/containers/LogoutButton";

interface Props {
  userData?: User | null;
}

function HeaderMenu({ userData }: Props) {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const onOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button
        customType="ghost"
        size="content"
        className="flex items-center justify-center"
        onClick={onOpen}
      >
        <MenuIcon className="text-brand-green w-full" />
      </Button>
      <div
        className={cn(
          "z-10 fixed top-0 bg-white flex flex-col w-full h-full ease-in duration-300",
          {
            ["left-0"]: open,
            ["left-[100%]"]: !open,
          },
        )}
      >
        <NavBar onClick={onClose} />

        <div className="flex flex-col gap-4 items-center mt-auto py-8">
          <Typography variant="bold">Hi, {userData?.name}</Typography>
          <LogoutButton />
        </div>
      </div>
    </>
  );
}

export default memo(HeaderMenu);
