import Credentials from "next-auth/providers/credentials";
import userLogIn from "@/libs/userLogIn";
import getUserProfile from "@/libs/getUserProfile";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const res = await userLogIn(
          credentials.email,
          credentials.password
        );

        const profile = await getUserProfile(res.token);

        return {
          id: profile.data._id,
          name: profile.data.name,
          email: profile.data.email,
          accessToken: res.token,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = {
        name: token.name,
        email: token.email,
      };
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};