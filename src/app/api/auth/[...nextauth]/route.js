import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
        remember: { label: 'Remember Me', type: 'checkbox' },
      },
      async authorize(credentials) {
        const { email, password, remember } = credentials;

        // Dummy auth
        if (email === 'test@example.com' && password === 'password123') {
          return {
            id: 1,
            email,
            remember: remember !== 'false', // ensure boolean
          };
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  jwt: {
    // default max age, overridden per user below
    maxAge: 30 * 24 * 60 * 60,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const remember = user.remember ?? true;
        token.user = user;
        token.remember = remember;
        token.exp = Math.floor(Date.now() / 1000) + (remember ? 60 * 60 * 24 * 30 : 60 * 60 * 4); // 30 days vs 4 hours
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.expires = new Date(token.exp * 1000).toISOString();
      return session;
    },
  },

  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
