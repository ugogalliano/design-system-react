import React, { HTMLAttributes } from "react";
import { combineProps } from "../../utils/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  const combinedProps = combineProps<HTMLDivElement, CardProps>(
    props,
    " bg-white-900 shadow-lg mt-5 rounded-md w-full p-5"
  );

  return <div {...combinedProps}>{props.children}</div>;
};

export default Card;
