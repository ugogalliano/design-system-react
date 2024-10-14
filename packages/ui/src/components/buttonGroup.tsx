import React, { ReactElement } from "react";
import { cn } from "../lib/utils";
import { ButtonProps } from "./button";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  children: ReactElement<ButtonProps>[];
  asChild?: boolean;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    { orientation = "horizontal", className, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";

    const classOriental =
      orientation === "horizontal" ? "flex flex-row" : "flex flex-col";

    return (
      <Comp ref={ref} className={cn(className, classOriental)} {...props}>
        {props.children}
      </Comp>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
