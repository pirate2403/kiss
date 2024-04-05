"use client";

import { AnchorHTMLAttributes, memo, PropsWithChildren } from "react";
import Link from "next/link";
import { getPrevPathName } from "@/utils/getPrevPathName";
import { usePathname } from "next/navigation";

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string | -1;
}

function NavLink({ children, href, ...restProps }: PropsWithChildren<Props>) {
  const pathname = usePathname();

  const url = href === -1 ? getPrevPathName(pathname ?? "") : href;

  return (
    <Link href={url} {...restProps}>
      {children}
    </Link>
  );
}

export default memo<PropsWithChildren<Props>>(NavLink);
