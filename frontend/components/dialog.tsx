"use client";
import React, { useState } from "react";
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
        className=" shadow p-4 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {children}

        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          x
        </button>
      </dialog>
    </>
  );
}
