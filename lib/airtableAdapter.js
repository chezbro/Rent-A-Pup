import Airtable from 'airtable';

export function AirtableAdapter(base) {
  return {
    async createUser(user) {
      const records = await base('Users').create([
        {
          fields: {
            Name: user.name,
            Email: user.email,
            // Add other fields as necessary
          }
        }
      ]);
      return { id: records[0].id, ...records[0].fields };
    },
    async getUser(id) {
      const record = await base('Users').find(id);
      return record ? { id: record.id, ...record.fields } : null;
    },
    async getUserByEmail(email) {
      const records = await base('Users').select({
        filterByFormula: `{Email} = '${email}'`
      }).firstPage();
      return records.length > 0 ? { id: records[0].id, ...records[0].fields } : null;
    },
    async getUserByAccount({ providerAccountId, provider }) {
      // Implement if you're using OAuth providers
      return null;
    },
    async updateUser(user) {
      const records = await base('Users').update([
        {
          id: user.id,
          fields: {
            Name: user.name,
            Email: user.email,
            // Update other fields as necessary
          }
        }
      ]);
      return { id: records[0].id, ...records[0].fields };
    },
    async deleteUser(userId) {
      await base('Users').destroy([userId]);
    },
    async linkAccount(account) {
      // Implement if you're using OAuth providers
    },
    async unlinkAccount({ providerAccountId, provider }) {
      // Implement if you're using OAuth providers
    },
    async createSession({ sessionToken, userId, expires }) {
      const records = await base('Sessions').create([
        {
          fields: {
            SessionToken: sessionToken,
            UserId: userId,
            Expires: expires.toISOString(),
          }
        }
      ]);
      return { id: records[0].id, ...records[0].fields };
    },
    async getSessionAndUser(sessionToken) {
      const records = await base('Sessions').select({
        filterByFormula: `{SessionToken} = '${sessionToken}'`
      }).firstPage();
      if (records.length === 0) return null;
      const session = { id: records[0].id, ...records[0].fields };
      const user = await this.getUser(session.UserId);
      return { session, user };
    },
    async updateSession({ sessionToken }) {
      // Implement as needed
    },
    async deleteSession(sessionToken) {
      const records = await base('Sessions').select({
        filterByFormula: `{SessionToken} = '${sessionToken}'`
      }).firstPage();
      if (records.length > 0) {
        await base('Sessions').destroy([records[0].id]);
      }
    },
    async createVerificationToken({ identifier, expires, token }) {
      // Implement if you're using email verification
    },
    async useVerificationToken({ identifier, token }) {
      // Implement if you're using email verification
    },
  };
}