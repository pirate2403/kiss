import { memo, PropsWithChildren } from "react";
import cn from "classnames";

const CLASS_NAMES = {
  base: "grid",
  lg: "lg:grid-cols-12 lg:gap-x-[30px]",
  md: "md:grid-cols-6 md:gap-x-[24px]",
  sm: "grid-cols-4 gap-x-[20px] ",
};

interface Props {
  className?: string;
}

function GridContainer({ children, className }: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        CLASS_NAMES.base,
        CLASS_NAMES.sm,
        CLASS_NAMES.md,
        CLASS_NAMES.lg,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default memo<PropsWithChildren<Props>>(GridContainer);
