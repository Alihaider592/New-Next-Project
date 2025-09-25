import Link from "next/link";
import { SignInButton } from "@/app/components/sign-in-button";
export default function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-700">
          Login
        </h1>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            name="UserName"
            placeholder="Username"
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-black px-4 py-2 font-semibold text-white hover:bg-gray-700"
          >
            Log in
          </button>
        </form>

          <SignInButton/>
        <p className="mt-6 text-center text-gray-600">
          Dont have any account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
