import React from "react";
import { twMerge } from "tailwind-merge";

export default function Checkbox({
  id,
  name,
  required = false,
  className,
}: {
  id?: string;
  name?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      required={required}
      className={twMerge(
        "w-[1.125rem] h-[1.125rem] cursor-pointer appearance-none rounded-md border border-gray-300 checked:bg-blue-500 checked:border-blue-500 transition duration-200 flex items-center justify-center checked:before:content-['✔'] checked:before:text-white checked:before:text-sm",
        className
      )}
    />
  );
}
