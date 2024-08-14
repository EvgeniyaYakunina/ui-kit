import { ComponentPropsWithoutRef } from "react";
import s from "./button.module.css";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";

type Props = {
  variant: "primary" | "secondary" | "outlined" | "ghost" | "icon";
  fullWidth?: boolean;
  asChild?: boolean;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  fullWidth,
  className,
  asChild,
  ...restProps
}: Props) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      {...restProps}
      className={clsx(
        s.buttonRoot,
        s[variant],
        fullWidth && "fullWidth",
        className,
      )}
    >
      Hello World
    </Comp>
  );
}
