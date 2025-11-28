"use client";

import { FieldError } from "react-hook-form";

type Props = {
  label?: string;
  type: string;
  placeholder: string;
  register: any;
  name: string;
  error?: FieldError;
};

export default function ReusableInput({
  label,
  type,
  placeholder,
  register,
  name,
  error,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full p-3 border border-gray-300 rounded-lg placeholder-black"
      />

      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
