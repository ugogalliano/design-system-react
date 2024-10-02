import React, { useMemo } from "react";
import Box from "../box/Box";
import { createColorVariants } from "../../utils/utils";

interface ColorsSectionProps {
  title: string;
}

const grade_section = [100, 200, 300, 400, 500, 600, 700, 800];

const ColorsSection = (props: ColorsSectionProps) => {
  const colorVariants = useMemo(
    () => createColorVariants(props.title.toLowerCase()),
    [props.title]
  );

  return (
    <>
      <h3 className="mt-4">{props.title}</h3>
      <div className="grid grid-cols-10  h-20">
        <Box value={50} rounded="left" className={`${colorVariants.get(50)}`} />
        {grade_section.map((item) => (
          <Box
            value={item}
            key={item}
            rounded="none"
            className={`${colorVariants.get(item)}`}
          />
        ))}
        <Box
          value={900}
          rounded="right"
          className={`${colorVariants.get(900)}`}
        />
      </div>
    </>
  );
};

export default ColorsSection;

/** Tailwind cannot "see" dynamic classes.
 * Usually the classes are generated  at runtime,
 * so the dynamic classes will not be included in the final CSS.
 * An easy solution is to include this class
 * in some part of the code.
 */

export const blackVariants =
  "bg-black-50 bg-black-100 bg-black-200 bg-black-300 bg-black-400 bg-black-500 bg-black-600 bg-black-700 bg-black-800 bg-black-900";

export const whiteVariants =
  "bg-white-50 bg-white-100 bg-white-200 bg-white-300 bg-white-400 bg-white-500 bg-white-600 bg-white-700 bg-white-800 bg-white-900";

export const primaryVariants =
  "bg-primary-50 bg-primary-100 bg-primary-200 bg-primary-300 bg-primary-400 bg-primary-500 bg-primary-600 bg-primary-700 bg-primary-800 bg-primary-900";

export const greyVariants =
  "bg-grey-50 bg-grey-100 bg-grey-200 bg-grey-300 bg-grey-400 bg-grey-500 bg-grey-600 bg-grey-700 bg-grey-800 bg-grey-900";

export const successVariants =
  "bg-success-50 bg-success-100 bg-success-200 bg-success-300 bg-success-400 bg-success-500 bg-success-600 bg-success-700 bg-success-800 bg-success-900";

export const dangerVariants =
  "bg-danger-50 bg-danger-100 bg-danger-200 bg-danger-300 bg-danger-400 bg-danger-500 bg-danger-600 bg-danger-700 bg-danger-800 bg-danger-900";
