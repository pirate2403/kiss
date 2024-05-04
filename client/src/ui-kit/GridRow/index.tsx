import { memo, PropsWithChildren } from "react";
import cn from "classnames";

const CLASS_NAMES = {
  base: "grid",
  lg: "lg:grid-cols-12 lg:gap-x-[30px] lg:px-16",
  md: "md:grid-cols-6 md:gap-x-[24px] md:px-8",
  sm: "grid-cols-4 gap-x-[20px] px-5",
  full: "md:h-full lg:h-full",
};

interface Props {
  className?: string;
  full?: boolean;
}

function GridRow({ children, className, full }: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        CLASS_NAMES.base,
        CLASS_NAMES.sm,
        CLASS_NAMES.md,
        CLASS_NAMES.lg,
        className,
        {
          [CLASS_NAMES.full]: full,
        },
      )}
    >
      {children}
    </div>
  );
}

export default memo<PropsWithChildren<Props>>(GridRow);
