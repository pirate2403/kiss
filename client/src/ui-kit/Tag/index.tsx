import { memo } from "react";
import cn from "classnames";

interface Props {
  type: "send" | "progress" | "done" | "error";
  className?: string;
}

const CLASS_NAMES = {
  base: "rounded-[5px] p-regular text-[12px] py-[4px] px-[6px] w-[94px] border-[1px] flex items-center justify-center",
  type: {
    send: "text-message bg-message-20 border-message",
    progress: "text-warning bg-warning-20 border-warning",
    done: "text-success bg-success-20 border-success",
    error: "text-error bg-error-20 border-error",
  },
} as const;

const CONTENT = {
  send: "Send",
  progress: "In progress",
  done: "Done",
  error: "Error",
};

function Tag({ type, className }: Props) {
  return (
    <div className={cn(CLASS_NAMES.base, CLASS_NAMES.type[type], className)}>
      {CONTENT[type]}
    </div>
  );
}

export default memo<Props>(Tag);
