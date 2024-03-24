import { memo } from "react";
import BackIcon from "@/assets/icons/arrow-left.svg";
import NavLink from "../../ui-kit/NavLink";
import MainLogo from "../../ui-kit/MainLogo";
import BreadCrumbs from "../../ui-kit/BreadCrumbs";

interface Props {
  breadCrumbs?: boolean;
}

function Header({ breadCrumbs }: Props) {
  return (
    <header className="w-full flex items-center justify-between py-4">
      <div className="flex items-center gap-8">
        <NavLink href={-1} className="text-brand-green">
          <BackIcon />
        </NavLink>
        <MainLogo size="sm" />
        {breadCrumbs && <BreadCrumbs />}
      </div>
      <div className="flex items-center gap-8">user info</div>
    </header>
  );
}

export default memo<Props>(Header);
