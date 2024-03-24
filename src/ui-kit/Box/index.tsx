import { HTMLAttributes, memo, PropsWithChildren } from "react";

function Box({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <div {...props}>{children}</div>;
}

export default memo<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>(Box);
