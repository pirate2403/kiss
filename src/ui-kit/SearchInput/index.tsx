import { ForwardedRef, forwardRef, InputHTMLAttributes, memo } from "react";
import Search from "@/assets/icons/search.svg";
import cn from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

function SearchInput(
  { label, error, disabled, className, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <label className="relative rounded-[36px] bg-gray-5 p-medium text-brand-green border-gray-40 border-[1px] flex items-center pl-[26px] pr-[64px] py-[12px]">
      <input
        ref={ref}
        className={cn(
          "outline-0 border-0 p-medium rounded-[5px] text-gray-50 placeholder:text-gray-20 w-full bg-transparent",
          className,
        )}
        disabled={disabled}
        {...props}
      />
      <Search className="absolute right-[26px] text-gray-40" />
    </label>
  );
}

export default memo<Props>(forwardRef<HTMLInputElement, Props>(SearchInput));
