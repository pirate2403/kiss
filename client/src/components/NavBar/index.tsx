import { ROUTES } from "@/logic/constants/routes";
import NavItem from "@/components/NavBar/NavItem";
import Dashboard from "@/assets/icons/dashboard.svg";
import Profile from "@/assets/icons/profile.svg";
import { MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler;
}

function NavBar({ onClick }: Props) {
  return (
    <nav className="w-full border-gray-40-25 py-8 md:border-r-2 lg:border-r-2 md:h-full lg:h-full">
      <ul>
        <NavItem
          href={ROUTES.dashboard}
          label="Dashboard"
          icon={<Dashboard />}
          onClick={onClick}
        />
        <NavItem
          href={ROUTES.profile}
          label="Profile"
          icon={<Profile />}
          onClick={onClick}
        />
      </ul>
    </nav>
  );
}

export default NavBar;
