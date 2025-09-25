// import Image from "next/image";
// import { auth } from "@/app/auth"; 
// import { SignOutButton } from "../components/sign-out-button";

// export default async function UserInfoPage() {
//   const session = await auth(); 
//   console.log('session',session)
//   if (!session?.user) {
//     return (
//       <div>
//         <h1>Next auth v5 vs Next.js 15</h1>
//         <p>You are not signed in.</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Next auth v5 vs Next.js 15</h1>
//       <p>User signed in with name: {session.user.name}</p>
//       <p>User signed in with email: {session.user.email}</p>

//       {session.user.image && (
//         <Image
//           src={session.user.image}
//           width={100}
//           height={100}
//           alt="User Avatar"
//           className="rounded-full"
//         />
//       )}

//       <SignOutButton />
//     </div>
//   );
// }
import Image from "next/image";
import { getServerSession } from "next-auth/next"; 
import { auth } from "@/app/auth"; // your NextAuth config
import { SignOutButton } from "../components/sign-out-button";

export default async function UserInfoPage() {
  const session = await getServerSession(auth); 

  if (!session?.user) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            NextAuth v5 vs Next.js 15
          </h1>
          <p className="text-gray-600">You are not signed in.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Welcome, {session.user.name}!
        </h1>

        {session.user.image && (
          <div className="flex justify-center mb-6">
            <Image
              src={session.user.image}
              width={120}
              height={120}
              alt="User Avatar"
              className="rounded-full border-4 border-purple-300"
            />
          </div>
        )}

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Name:</span> {session.user.name}
        </p>
        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Email:</span> {session.user.email}
        </p>

        <SignOutButton/>
      </div>
    </div>
  );
}
