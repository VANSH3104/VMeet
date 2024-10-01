"use client";
import { signIn } from "next-auth/react";
export const Topbar = () => {
  return (
    <div className="rounded-lg shadow-sm">
      <div className="flex justify-between">
        <div className="h-full">
          <img
            src="/images/Group.png"
            className="w-32 h-17 pl-8 object-contain"
            alt="Project Logo"
          />
        </div>
        <div className="">
          <div>
            <button onClick={() => signIn()}>signin</button>
          </div>
        </div>
      </div>
    </div>
  );
};
