import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'

const AIRTABLE_API_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Users`;

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          // Find user by email
          const userResponse = await fetch(`${AIRTABLE_API_URL}?filterByFormula={Email}='${credentials.email}'`, {
            headers: {
              'Authorization': `Bearer ${process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN}`,
            },
          });
          const userData = await userResponse.json();

          if (userData.records.length === 0) {
            return null;
          }

          const user = userData.records[0];

          // Verify password
          const isPasswordValid = await bcrypt.compare(credentials.password, user.fields.Password);

          if (!isPasswordValid) {
            return null;
          }

          // Password is valid, return user data (excluding password)
          const { Password, ...userWithoutPassword } = user.fields;
          return { id: user.id, ...userWithoutPassword };

        } catch (error) {
          console.error('Authentication error:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }