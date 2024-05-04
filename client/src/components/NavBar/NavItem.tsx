"use client";

import { MouseEventHandler, ReactNode, useMemo } from "react";
import Link from "next/link";
import cn from "classnames";
import Typography from "@/ui-kit/Typography";
import { usePathname } from "next/navigation";

interface Props {
  icon: ReactNode;
  href: string;
  label: string;
  onClick?: MouseEventHandler;
}

function NavItem({ href, label, icon, onClick }: Props) {
  const pathname = usePathname();
  const isActive = useMemo(() => pathname === href, [pathname, href]);

  return (
    <li className="w-full">
      <Link href={href} onClick={onClick}>
        <Typography
          className={cn("w-full pl-6 h-12 flex items-center gap-6", {
            ["bg-brand-green-20 border-r-4 border-brand-green"]: isActive,
          })}
          variant="bold"
          color="brand"
        >
          {icon}
          {label}
        </Typography>
      </Link>
    </li>
  );
}

export default NavItem;
