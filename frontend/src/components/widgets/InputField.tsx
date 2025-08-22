"use client";
import React from "react";

export default function InputField({
  label,
  name,
  onChange,
  required,
}: {
  label: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-gray-700" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        className="border border-gray-200 px-4 rounded outline-none h-11 bg-slate-50"
        placeholder={label}
        name={name}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
