import { HTMLAttributes } from "react";

export const combineProps = <S, T extends HTMLAttributes<S>>(
  props: T,
  defaultClasses: string
): HTMLAttributes<S> => {
  const { className, ...rest } = props;
  const combinedClassName = [defaultClasses, className]
    .filter(Boolean)
    .join(" ");

  return { ...rest, className: combinedClassName };
};

export const createColorVariants = (color: string): Map<number, string> => {
  const colorMap = new Map<number, string>();
  colorMap.set(50, `bg-${color}-50`);
  for (let i = 1; i <= 9; i++) {
    colorMap.set(i * 100, `bg-${color}-${i * 100}`);
  }
  return colorMap;
};

export const blackVariants =
  "bg-black-50 bg-black-100 bg-black-200 bg-black-300 bg-black-400 bg-black-500 bg-black-600 bg-black-700 bg-black-800 bg-black-900";

export const whiteVariants =
  "bg-white-50 bg-white-100 bg-white-200 bg-white-300 bg-white-400 bg-white-500 bg-white-600 bg-white-700 bg-white-800 bg-white-900";

export const primaryVariants =
  "bg-primary-50 bg-primary-100 bg-primary-200 bg-primary-300 bg-primary-400 bg-primary-500 bg-primary-600 bg-primary-700 bg-primary-800 bg-primary-900";
