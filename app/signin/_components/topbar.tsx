"use client";
import { signIn } from "next-auth/react";

export const Topbar = () => {
  return (
    <div className="bg-white shadow">
      <div className="flex justify-between items-center h-16">
        <div className="">
          <img
            src="/images/Group.png"
            className="h-20 pl-5" 
            alt="Project Logo"
          />
        </div>
        <button onClick={() => signIn()} className="p-2">Sign In</button> {/* Simplified structure */}
      </div>
    </div>
  );
};
