import { memo, PropsWithChildren, HTMLAttributes } from "react";
import cn from "classnames";

const EMPTY = "";
const CLASS_NAMES = {
  lg: [
    EMPTY,
    "lg:col-span-1",
    "lg:col-span-2",
    "lg:col-span-3",
    "lg:col-span-4",
    "lg:col-span-5",
    "lg:col-span-6",
    "lg:col-span-7",
    "lg:col-span-8",
    "lg:col-span-9",
    "lg:col-span-10",
    "lg:col-span-11",
    "lg:col-span-12",
  ],
  md: [
    EMPTY,
    "md:col-span-1",
    "md:col-span-2",
    "md:col-span-3",
    "md:col-span-4",
    "md:col-span-5",
    "md:col-span-6",
  ],
  sm: [EMPTY, "col-span-1", "col-span-2", "col-span-3", "col-span-4"],
};

interface Props extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  lg?: number;
  md?: number;
  sm?: number;
}

function GridBlock({
  children,
  className,
  sm = 4,
  md = 6,
  lg = 12,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        CLASS_NAMES.sm[sm],
        CLASS_NAMES.md[md],
        CLASS_NAMES.lg[lg],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default memo<Props>(GridBlock);
