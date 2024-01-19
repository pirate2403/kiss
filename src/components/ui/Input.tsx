import { ForwardedRef, forwardRef, InputHTMLAttributes, memo } from "react";
import Problem from "@/assets/icons/problem.svg";
import cn from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

const CLASS_NAMES = {
  base: "relative rounded-[5px] p-medium text-brand-green border-brand-green border-[1px] flex items-center p-[16px] mt-[8px]",
  label: "absolute top-[-12px] pointer-events-none z-10 px-[4px]",
  line: "absolute z-[-1] px-[4px] bg-white w-full top-[10px] left-0 border-b-8 border-white",
  input:
    "outline-0 border-0 p-medium rounded-[5px] text-gray-50 placeholder:text-gray-20 w-full bg-transparent",
  disabled: "bg-gray-5 border-gray-10 text-gray-50",
  error: "text-error border-error",
  offset: "pr-[44px]",
  icon: "absolute right-[12px]",
} as const;

function Input(
  { label, error, disabled, className, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const errorClass = cn({ [CLASS_NAMES.error]: error && !disabled });
  const offsetClass = cn({ [CLASS_NAMES.offset]: error && !disabled });
  const disabledClass = cn({ [CLASS_NAMES.disabled]: disabled });

  return (
    <label
      className={cn(CLASS_NAMES.base, errorClass, offsetClass, disabledClass)}
    >
      {label && (
        <>
          <span className={cn(CLASS_NAMES.label, errorClass)}>
            {label}
            <span className={CLASS_NAMES.line} />
          </span>
        </>
      )}
      <input
        ref={ref}
        className={cn(CLASS_NAMES.input, className)}
        disabled={disabled}
        {...props}
      />
      {error && <Problem className={CLASS_NAMES.icon} />}
    </label>
  );
}

export default memo<Props>(forwardRef<HTMLInputElement, Props>(Input));
