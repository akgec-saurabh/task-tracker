import { cn } from "@/lib/utils";
import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "icon" | "small" | "medium" | "large";
}
export default function Button({
  children,
  variant = "primary",
  size = "medium",
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
  };
  const sizeStyles = {
    icon: "w-10 h-10 p-0",
    small: "w-24",
    medium: "w-32",
    large: "w-48",
  };

  return (
    <button
      className={cn(
        "flex text-nowrap gap-2 justify-center items-center h-10 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300 hover:scale-105",
        variantStyles[variant],
        sizeStyles[size]
      )}
      {...props}
    >
      {children}
    </button>
  );
}
