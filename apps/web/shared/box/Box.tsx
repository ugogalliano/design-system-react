import React, { useMemo } from "react";

interface BoxProps {
  rounded: "right" | "left" | "none";
  value: number;
  className: string;
}

const Box = (props: BoxProps) => {
  const roundedClassName = useMemo((): string => {
    let string = "";
    if (props.rounded === "right") string = "rounded-r-md";
    if (props.rounded === "left") string = "rounded-l-md";
    return string;
  }, [props.rounded]);

  const combinedProps =
    roundedClassName +
    " flex items-center justify-center text-white-900 h-full  " +
    props.className;

  return <div className={combinedProps}>{props.value}</div>;
};

export default Box;
