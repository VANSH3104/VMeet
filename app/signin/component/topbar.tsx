"use client";
import { signIn } from "next-auth/react";

export const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="flex justify-between items-center h-16">
        <div className="">
          <img
            src="/images/Group.png"
            className="w-32 h-auto object-contain" 
            alt="Project Logo"
          />
        </div>
        <button onClick={() => signIn()} className="p-2">Sign In</button> {/* Simplified structure */}
      </div>
    </div>
  );
};
