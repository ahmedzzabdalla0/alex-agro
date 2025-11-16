import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import type { IconType, IconBaseProps } from "react-icons";

interface MyProps extends HTMLAttributes<HTMLSpanElement> {
  icon: IconType;
  iconProps?: IconBaseProps;
}

export default function IconBadge({
  className,
  icon: Icon,
  iconProps,
  ...props
}: MyProps) {
  const { className: iconClassName, ...restIconProps } = iconProps || {};
  return (
    <span
      className={twMerge(
        "inline-block rounded-full bg-primary/10 p-3",
        className,
      )}
      {...props}
    >
      {
        <Icon
          className={twMerge("text-2xl text-primary", iconClassName)}
          {...restIconProps}
        />
      }
    </span>
  );
}
