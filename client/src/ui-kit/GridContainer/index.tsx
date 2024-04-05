import { memo, PropsWithChildren, ReactNode } from "react";
import cn from "classnames";

interface Props {
  className?: string;
  header?: ReactNode;
}

function GridContainer({
  children,
  className,
  header,
}: PropsWithChildren<Props>) {
  return (
    <div className={cn("h-full flex flex-col", className)}>
      {header}
      {children}
    </div>
  );
}

export default memo<PropsWithChildren<Props>>(GridContainer);
