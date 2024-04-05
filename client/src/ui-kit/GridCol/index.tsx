import { HTMLAttributes, memo, PropsWithChildren } from "react";
import cn from "classnames";

const START = [
  "lg:col-start-1",
  "lg:col-start-2",
  "lg:col-start-3",
  "lg:col-start-4",
  "lg:col-start-5",
  "lg:col-start-6",
  "lg:col-start-7",
  "lg:col-start-8",
  "lg:col-start-9",
  "lg:col-start-10",
  "lg:col-start-11",
  "lg:col-start-12",
  "lg:col-start-13",
  "md:col-start-1",
  "md:col-start-2",
  "md:col-start-3",
  "md:col-start-4",
  "md:col-start-5",
  "md:col-start-6",
  "md:col-start-7",
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
];

const END = [
  "lg:col-end-1",
  "lg:col-end-2",
  "lg:col-end-3",
  "lg:col-end-4",
  "lg:col-end-5",
  "lg:col-end-6",
  "lg:col-end-7",
  "lg:col-end-8",
  "lg:col-end-9",
  "lg:col-end-10",
  "lg:col-end-11",
  "lg:col-end-12",
  "lg:col-end-13",
  "md:col-end-1",
  "md:col-end-2",
  "md:col-end-3",
  "md:col-end-4",
  "md:col-end-5",
  "md:col-end-6",
  "md:col-end-7",
  "col-end-1",
  "col-end-2",
  "col-end-3",
  "col-end-4",
  "col-end-5",
];

const CLASS_NAMES = {
  lg: {
    start: START.slice(0, 13),
    end: END.slice(0, 13),
  },
  md: {
    start: START.slice(13, 20),
    end: END.slice(13, 20),
  },
  sm: {
    start: START.slice(20),
    end: END.slice(20),
  },
};

interface Props extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  lg?: [number, number];
  md?: [number, number];
  sm?: [number, number];
}

function GridCol({
  children,
  className,
  sm = [1, 4],
  md = [1, 6],
  lg = [1, 12],
  ...props
}: Props) {
  const [lgStart, lgEnd] = lg;
  const [mdStart, mdEnd] = md;
  const [smStart, smEnd] = sm;

  const lgClasses = `${CLASS_NAMES.lg.start[lgStart - 1]} ${CLASS_NAMES.lg.end[lgEnd]}`;
  const mdClasses = `${CLASS_NAMES.md.start[mdStart - 1]} ${CLASS_NAMES.md.end[mdEnd]}`;
  const smClasses = `${CLASS_NAMES.sm.start[smStart - 1]} ${CLASS_NAMES.sm.end[smEnd]}`;

  return (
    <div className={cn(smClasses, mdClasses, lgClasses, className)} {...props}>
      {children}
    </div>
  );
}

export default memo<Props>(GridCol);
