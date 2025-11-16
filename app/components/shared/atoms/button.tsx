import { ComponentPropsWithoutRef, ElementType } from "react";

import type { IconType } from "react-icons";
import { BiArrowBack } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

interface ButtonProps<T extends ElementType = "button"> {
  as?: T;
  variant?: "primary" | "secondary";
  icon?: IconType;
  children?: React.ReactNode;
}

type MyProps<T extends ElementType> = ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>;

export default function Button<T extends ElementType = "button">({
  variant = "primary",
  as,
  className,
  children,
  icon: Icon = BiArrowBack,
  ...props
}: MyProps<T>) {
  const Component = as || "button";
  return (
    <Component
      className={twMerge(
        "group border text-secondary transition-colors font-b-19",
        children
          ? "flex items-center gap-x-2 rounded-6 px-4 py-2 mobile:px-5 mobile:py-3.5"
          : "rounded-full p-1.5",
        variant === "primary" &&
          "border-primary bg-primary hover:border-primary-200 hover:bg-primary-200",
        variant === "secondary" &&
          "border-secondary bg-transparent hover:border-primary hover:bg-primary",
        className,
      )}
      {...props}
    >
      {children}
      <Icon
        size={20}
        className={twMerge("rotate-180 text-secondary transition-colors")}
      />
    </Component>
  );
}
