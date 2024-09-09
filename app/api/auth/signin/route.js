import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN }).base(process.env.AIRTABLE_BASE_ID);

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Find user by email
    const records = await base('Users').select({
      filterByFormula: `{Email} = '${email}'`
    }).firstPage();

    if (records.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const user = records[0];

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.fields.Password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Password is valid, return user data (excluding password)
    const { Password, ...userWithoutPassword } = user.fields;
    return NextResponse.json({ id: user.id, ...userWithoutPassword });

  } catch (error) {
    console.error('Sign-in error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}