// catch-all for all providers

import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      // OAuth with githut provider
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username: ",
          type: "text",
          placeholder: "johndoe",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "*********",
        },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "meg", password: "jamit" };
        if (credentials && "username" in credentials) {
          const { username, password } = credentials;
          if (username === user.name && password === user.password) {
            return user;
          } else {
            return null;
          }
        } else {
          // Handle case when 'credentials' is undefined or does not have 'username'
          return null;
        }
      },
    }),
  ],
  // we cane define pages custom here
};
