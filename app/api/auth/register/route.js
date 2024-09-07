import { NextResponse } from 'next/server';
import Airtable from 'airtable';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN }).base(process.env.AIRTABLE_BASE_ID);

  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if user already exists
    const existingUsers = await base('Users').select({
      filterByFormula: `{Email} = '${email}'`
    }).firstPage();

    if (existingUsers.length > 0) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const records = await base('Users').create([
      {
        fields: {
          Name: name,
          Email: email,
          Password: hashedPassword,
        }
      }
    ]);

    return NextResponse.json({ message: 'User created successfully', userId: records[0].id }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal server error', details: error.message }, { status: 500 });
  }
}