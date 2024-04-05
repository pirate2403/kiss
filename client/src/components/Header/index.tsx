import { memo } from "react";
import BackIcon from "@/assets/icons/arrow-left.svg";
import NavLink from "@/ui-kit/NavLink";
import MainLogo from "@/ui-kit/MainLogo";
import BreadCrumbs from "@/ui-kit/BreadCrumbs";
import { ROUTES } from "@/businessLogic/constants/routes";

interface Props {
  backButtonHref?: (typeof ROUTES)[keyof typeof ROUTES] | -1;
  breadCrumbs?: boolean;
  userData?: null;
}

function Header({ breadCrumbs, backButtonHref, userData }: Props) {
  return (
    <header className="w-full flex items-center justify-between py-4 lg:px-16 md:px-8 px-5">
      <div className="flex items-center gap-8">
        {backButtonHref && (
          <NavLink href={backButtonHref} className="text-brand-green">
            <BackIcon />
          </NavLink>
        )}
        <MainLogo size="sm" />
        {breadCrumbs && <BreadCrumbs />}
      </div>
      {userData && <div className="flex items-center gap-8">user info</div>}
    </header>
  );
}

export default memo<Props>(Header);
