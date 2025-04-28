import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-800 h-16 text-white flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Tracker</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
