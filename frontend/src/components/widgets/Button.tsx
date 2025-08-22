import React from "react";
import { twMerge } from "tailwind-merge";

export default function Button({
  name,
  className,
  loading = false,
}: {
  name: string;
  className?: string;
  loading?: boolean;
}) {
  return (
    <button
      className={twMerge(
        "h-11 bg-blue-600 disabled:bg-blue-500 disabled:cursor-not-allowed transition-all text-white px-4 rounded cursor-pointer",
        className
      )}
      disabled={loading}
    >
      {loading ? "Loading..." : name}
    </button>
  );
}
