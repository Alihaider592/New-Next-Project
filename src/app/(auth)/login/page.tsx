import Link from "next/link";
export default function login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">
          Login
        </h2>
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
            className="mt-4 w-full rounded-lg bg-black px-4 py-2 font-semibold text-white cursor-pointer hover:bg-gray-700"
          >
            Login
          </button>
          <p className="mt-6 text-center text-gray-600">
          Dont have an acount?{" "}
          <Link
            href="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        </form>
      </div>
    </div>
  );
}
