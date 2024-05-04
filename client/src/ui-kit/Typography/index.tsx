import { memo, ComponentProps } from "react";
import cn from "classnames";

type TypographyTag = "span" | "p" | "h1" | "h2";
type TypographyVariant = "light" | "regular" | "medium" | "bold";
type TypographyColor = "default" | "primary" | "white" | "brand";

type TypographyComponentProps<T extends TypographyTag> = Omit<
  ComponentProps<T>,
  "ref"
>;

interface AdditionalProps {
  tag?: TypographyTag;
  variant?: TypographyVariant;
  color?: TypographyColor;
}

const TAG_CLASS_NAMES = {
  span: "text-[18px]  leading-5",
  p: "text-[18px] leading-5",
  h1: "text-[42px] leading-10",
  h2: "text-[36px] leading-10",
} as const;

const VARIANT_CLASS_NAMES = {
  light: "font-light",
  regular: "font-regular",
  medium: "font-medium",
  bold: "font-bold",
} as const;

const COLOR_CLASS_NAMES = {
  default: "text-gray-50",
  primary: "text-brand-green",
  brand: "text-brand-green-2",
  white: "text-white",
} as const;

function Typography<T extends TypographyTag = "span">({
  tag = "span",
  variant = "regular",
  color = "default",
  className,
  children,
  ...rest
}: AdditionalProps & TypographyComponentProps<T>) {
  const Element = tag;

  return (
    <Element
      className={cn(
        TAG_CLASS_NAMES[tag],
        VARIANT_CLASS_NAMES[variant],
        COLOR_CLASS_NAMES[color],
        className,
      )}
      {...rest}
    >
      {children}
    </Element>
  );
}

export default memo(Typography);
