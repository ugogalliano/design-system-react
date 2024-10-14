import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { ChevronRight, ChevronLeft } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center gap-2 justify-center w-full whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none  disabled:bg-grey-300 disabled:text-grey-500 ",
  {
    variants: {
      variant: {
        default:
          "bg-primary-500 text-white-900 focus:ring focus:ring-primary-300 font-normal hover:bg-primary-700 active:bg-primary-800",
        secondary:
          "bg-white-900 disabled:border-grey-400 border-primary-500  border-[0.12rem] focus:ring focus:ring-primary-300 focus:bg-white-900 active:bg-primary-200 text-primay-500 hover:bg-primary-100 font-normal text-primary-800",
        outline:
          "bg-white-900 disabled:border-grey-400 focus:ring focus:ring-primary-300 focus:bg-white-900 active:bg-primary-200 text-primay-500 hover:bg-primary-100 font-normal text-primary-800",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        xs: "h-8 text-xs rounded-md px-3",
        sm: "h-9 text-sm rounded-md px-3",
        md: "h-10 text-md rounded-md px-2",
        lg: "h-11 text-lg rounded-md px-2",
        giant: "h-14 text-xl rounded-md px-2",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xs",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {size !== "icon" && <ChevronLeft className="h-[40%]" />}
        {props.children}
        {size !== "icon" && <ChevronRight className="h-[40%]" />}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
