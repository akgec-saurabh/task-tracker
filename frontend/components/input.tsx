import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id}>{label}</label>
      <input
        id={props.id}
        className="border border-gray-300 rounded-md p-2"
        {...props}
      />
    </div>
  );
}
