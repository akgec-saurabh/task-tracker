"use client";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
interface DialogProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export default function Dialog({ children, isOpen, setIsOpen }: DialogProps) {
  return (
    <>
      <dialog
        open={isOpen}
        className=" shadow p-4 z-50 bg-white rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {children}

        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon className="size-6" />
        </button>
      </dialog>
    </>
  );
}
