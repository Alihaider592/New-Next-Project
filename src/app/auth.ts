
// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";

// export const { handlers, auth } = NextAuth({
//   providers: [
//     GitHub({
//       clientId: process.env.GITHUB_ID!,
//       clientSecret: process.env.GITHUB_SECRET!,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   session: { strategy: "jwt" },
// });

// app/auth.ts
import GitHub from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const auth: NextAuthOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
};
