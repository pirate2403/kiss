import CheckCircle from "@/assets/icons/check-circle.svg";
import Message from "@/assets/icons/message.svg";
import Alert from "@/assets/icons/alert.svg";
import Error from "@/assets/icons/error.svg";
import Info from "@/assets/icons/information.svg";
import { memo } from "react";
import cn from "classnames";

interface Props {
  type?: "success" | "message" | "warning" | "error" | "info";
  className?: string;
  title: string;
  message: string;
}

const CLASS_NAMES = {
  base: "rounded-[5px] p-regular text-[12px] flex items-center gap-[14px] px-[20px] py-[12px] text-white",
  type: {
    success: "bg-success",
    message: "bg-message",
    warning: "bg-warning",
    error: "bg-error",
    info: "bg-information",
  },
} as const;

const ICONS = {
  success: <CheckCircle />,
  message: <Message />,
  warning: <Alert />,
  error: <Error />,
  info: <Info />,
} as const;

function Notification({ type = "success", className, message, title }: Props) {
  return (
    <div className={cn(CLASS_NAMES.base, CLASS_NAMES.type[type], className)}>
      <div className="min-w-5">{ICONS[type]}</div>
      <div className="flex flex-col gap-0 w-[248px]">
        <span className="p-bold text-[14px] text-white">{title}</span>
        <span className="p-regular text-[12px] text-white leading-4">
          {message}
        </span>
      </div>
    </div>
  );
}

export default memo<Props>(Notification);
