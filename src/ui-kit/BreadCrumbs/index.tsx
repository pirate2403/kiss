"use client";

import { Fragment, memo, useMemo } from "react";
import { usePathname } from "next/navigation";
import { transformPathNameToChunks } from "@/utils/transformPathNameToChunks";
import Link from "next/link";
import { firstToUpperCase } from "@/utils/firstToUpperCase";

function BreadCrumbs() {
  const pathName = usePathname();

  const paths = useMemo(() => {
    const chunks = transformPathNameToChunks(pathName);
    return chunks.filter((item) => !!item);
  }, [pathName]);

  return (
    <div className="text-gray-20 flex items-center select-none font-bold">
      {paths.map((path, i) => (
        <Fragment key={path}>
          {i !== 0 && <p>&nbsp;/&nbsp;</p>}
          {i === paths.length - 1 ? (
            <p>{firstToUpperCase(path)}</p>
          ) : (
            <Link href={`/${paths.slice(0, i + 1).join("/")}`}>
              {firstToUpperCase(path)}
            </Link>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default memo(BreadCrumbs);
