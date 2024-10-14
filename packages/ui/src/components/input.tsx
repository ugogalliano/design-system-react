"use client";

import { useState, useCallback, useRef, forwardRef, useMemo } from "react";
import { cn } from "../lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Star } from "lucide-react";
import { useClickOutsideListener } from "../hooks/useClickOutsideListener";
import React from "react";

const inputVariants = cva(
  "flex h-10 w-full hover:bg-grey-100  rounded-md border  px-3 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground   focus:bg-primary-100 focus:border-primary-500 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-grey-50 focus-within:text-black-900 ",
        outline: "focus:bg-white-900 focus-within:text-black-900 ",
      },
      dim: {
        md: " text-md rounded-md px-2",
        lg: "text-lg rounded-md px-2",
      },
    },
    defaultVariants: {
      variant: "default",
      dim: "md",
    },
  }
);

const iconVariant = cva("left-2 top-2 absolute ", {
  variants: {
    variant: {
      default: "text-grey-500 ",
      outline: "text-grey-500 ",
    },
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  helperText?: string;
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      dim,
      type,
      placeholder = "Placeholder",
      helperText,
      label,
      ...props
    },
    ref
  ) => {
    const [isClickContainer, setIsClickContainer] = useState<boolean>(false);
    const refContainer = useRef<HTMLDivElement | null>(null);

    const onClickContainer = useCallback(() => {
      setIsClickContainer(true);
    }, []);

    useClickOutsideListener(refContainer, () => setIsClickContainer(false));

    const classNameStar = useMemo(
      () =>
        isClickContainer ? cn(iconVariant()) : cn(iconVariant({ variant })),
      [isClickContainer, variant]
    );

    return (
      <>
        <label htmlFor={props.id}>{label}</label>
        <div
          ref={refContainer}
          onClick={onClickContainer}
          className="relative mt-1 focus-within:text-primary-500"
        >
          <Star className={classNameStar} />
          <input
            type={type}
            className={cn(inputVariants({ variant, dim, className }), "pl-10")}
            ref={ref}
            placeholder={placeholder}
            {...props}
          />
          {helperText && <p className="mt-1">{helperText}</p>}
        </div>
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
