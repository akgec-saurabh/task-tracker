"use client";

import Button from "@/components/button";
import Link from "next/link";
import React, { useReducer } from "react";

type userState = {
  email: string;
  password: string;
  name: string;
  country: string;
};

type userAction = {
  type: string;
  payload: Partial<userState>;
};

const userReducer = (state: userState, action: userAction) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload.email || "" };
    case "SET_PASSWORD":
      return { ...state, password: action.payload.password || "" };
    case "SET_NAME":
      return { ...state, name: action.payload.name || "" };
    case "SET_COUNTRY":
      return { ...state, country: action.payload.country || "" };
    default:
      return state;
  }
};

export default function SignupPage() {
  const [state, dispatch] = useReducer(userReducer, {
    email: "",
    password: "",
    name: "",
    country: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/signup`,
      {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center max-w-xl w-full shadow-md p-4 rounded-md space-y-4">
        <h1 className="text-2xl font-bold">Signup</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4  w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={state.email}
              onChange={(e) =>
                dispatch({
                  type: "SET_EMAIL",
                  payload: { email: e.target.value },
                })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              placeholder="Name"
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: "SET_NAME",
                  payload: { name: e.target.value },
                })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={state.password}
              onChange={(e) =>
                dispatch({
                  type: "SET_PASSWORD",
                  payload: { password: e.target.value },
                })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              placeholder="Country"
              value={state.country}
              onChange={(e) =>
                dispatch({
                  type: "SET_COUNTRY",
                  payload: { country: e.target.value },
                })
              }
            />
          </div>

          <Button type="submit">Signup</Button>
        </form>
        <Link
          href="/login"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}
