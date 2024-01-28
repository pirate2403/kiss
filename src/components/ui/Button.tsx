import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import cn from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "s" | "l" | "xl";
  customType?: "primary" | "secondary" | "danger";
  icon?: ReactNode;
}

const CLASS_NAMES = {
  base: "rounded-[5px] p-bold px-[12px] active:brightness-95",
  disabled: "disabled:bg-gray-10 disabled:border-gray-10 disabled:text-gray-40",
  size: {
    s: "py-[10px] w-[129px] text-[12px] border-[1px]",
    l: "py-[24px] w-[210px] text-[18px] border-[2px]",
    xl: "py-[24px] w-[437px] text-[18px] border-[2px]",
  },
  type: {
    primary: "text-white bg-brand-green border-brand-green",
    secondary: "text-brand-green border-brand-green",
    danger: "text-white bg-brand-red-2 border-brand-red-2",
  },
} as const;

function Button({
  customType = "primary",
  size = "s",
  children,
  icon,
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        CLASS_NAMES.base,
        CLASS_NAMES.disabled,
        CLASS_NAMES.size[size],
        CLASS_NAMES.type[customType],
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {children}
        {icon}
      </div>
    </button>
  );
}

export default memo<Props>(Button);
