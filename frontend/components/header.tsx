"use client";
import { Plus, User } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";
import Button from "./button";
import { CreateProjectContext } from "@/store/create-project";
export default function Header() {
  const { setDialogOpen } = useContext(CreateProjectContext);
  return (
    <header className=" w-full bg-gray-800 h-16 text-white flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Task Tracker</Link>
        </h1>
        <nav className="flex gap-4">
          <ul className="flex space-x-4">
            <li className="flex items-center gap-2">
              <Link href="/login">
                <User />
              </Link>
            </li>
            <li>
              <Button size="large" onClick={() => setDialogOpen(true)}>
                <Plus /> Create Project
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
