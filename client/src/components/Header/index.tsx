import { memo } from "react";
import BackIcon from "@/assets/icons/arrow-left.svg";
import MenuIcon from "@/assets/icons/menu.svg";
import NavLink from "@/ui-kit/NavLink";
import MainLogo from "@/ui-kit/MainLogo";
import { ROUTES } from "@/logic/constants/routes";
import { User } from "@/logic/api/user/interfaces";
import Typography from "@/ui-kit/Typography";
import LogoutButton from "@/containers/LogoutButton";
import Button from "@/ui-kit/Button";
import HeaderMenu from "@/components/HeaderMenu";

interface Props {
  backButtonHref?: (typeof ROUTES)[keyof typeof ROUTES] | -1;
  userData?: User | null;
}

function Header({ backButtonHref, userData }: Props) {
  return (
    <header className="w-full flex items-center justify-between py-4 lg:px-16 md:px-8 px-5">
      <div className="flex items-center lg:gap-12 md:gap-12 gap-4">
        {backButtonHref && (
          <NavLink href={backButtonHref} className="text-brand-green sm-hidden">
            <BackIcon />
          </NavLink>
        )}
        <MainLogo size="sm" />
      </div>

      {userData && (
        <>
          <div className="sm-hidden">
            <div className="flex flex-col gap-2 items-end">
              <Typography variant="bold">Hi, {userData.name}</Typography>
              <LogoutButton />
            </div>
          </div>

          <div className="sm-visible">
            <HeaderMenu userData={userData} />
          </div>
        </>
      )}
    </header>
  );
}

export default memo<Props>(Header);
