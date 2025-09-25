// env.d.ts
namespace NodeJS {
  interface ProcessEnv {
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    DATABASE_URL: string;
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL: string;
  }
}
