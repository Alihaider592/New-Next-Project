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
      <div>
        <h1>NextAuth v5 vs Next.js 15</h1>
        <p>You are not signed in.</p>
      </div>
    );
  }
console.log('session.user',session.user)
  return (
    <div>
      <h1>NextAuth v5 vs Next.js 15</h1>
      <p>User signed in with name: {session.user.name}</p>
      <p>User signed in with email: {session.user.email}</p>

      {session.user.image && (
        <Image
          src={session.user.image}
          width={100}
          height={100}
          alt="User Avatar"
          className="rounded-full"
        />
      )}

      <SignOutButton />
    </div>
  );
}
