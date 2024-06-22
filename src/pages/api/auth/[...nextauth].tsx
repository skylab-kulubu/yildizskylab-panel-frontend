 import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // adminUser
        // if (process.env.NEXTAUTH_SECRET === "asdasd") {
        //     if (
        //         email !== "admin@admin.com" ||
        //         password !== "adminadmin"
        //     )
        //         return null;
        //     const userDummy = {
        //         id: "1",
        //         name: "dogu",
        //         email: email,
        //         password: password,
        //         team: "WEBLAB",
        //     };
        //     return userDummy;
        // }

        // login url from .env

        const res = await fetch(process.env.BACKEND_URL + '/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        if (res.status !== 201) return null;
        const { token } = await res.json();

        const userData = await fetch(process.env.BACKEND_URL + '/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (userData.status !== 200) return null;
        const user = await userData.json();
        user.accessToken = token;
        if (res.ok && user) {
          return user;
        } else return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      session.user = token;
      return session;
    },
  },
};

export default NextAuth(authOptions); 
