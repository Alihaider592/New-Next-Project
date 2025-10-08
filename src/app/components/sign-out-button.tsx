"use client";

import { signOut } from "next-auth/react";

interface SignOutButtonProps {
  className?: string;
}

export function SignOutButton({ className }: SignOutButtonProps) {
  return (
    <button
      onClick={() => signOut()}
      className={`bg-red-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-red-600 shadow-md transition-all duration-300 ${className || ""}`}
    >
      Sign Out
    </button>
  );
}
