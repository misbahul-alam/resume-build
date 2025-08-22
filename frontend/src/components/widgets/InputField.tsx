"use client";
import React from "react";

export default function InputField({
  label,
  name,
  error,
  onChange,
  required,
}: {
  label: string;
  name?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col ">
      <label className="text-gray-700 mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        className={
          error
            ? "border border-red-400 px-4 rounded outline-none h-11 bg-slate-50"
            : "border border-gray-200 px-4 rounded outline-none h-11 bg-slate-50"
        }
        placeholder={label}
        name={name}
        onChange={onChange}
        required={required}
      />
      {error && <span className="text-red-500/80 text-sm">{error}</span>}
    </div>
  );
}
