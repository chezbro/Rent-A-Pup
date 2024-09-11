import { NextResponse } from 'next/server';
import Airtable from 'airtable';

export async function POST(request) {
  console.log('Waitlist API route called');
  const base = new Airtable({ apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN }).base(process.env.AIRTABLE_BASE_ID);

  try {
    const { name, contact } = await request.json();
    console.log('Received data:', { name, contact });

    if (!name || !contact) {
      console.log('Missing required fields');
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if user already exists
    console.log('Checking for existing user');
    const existingUsers = await base('Users').select({
      filterByFormula: `OR({Email} = '${contact}', {Phone} = '${contact}')`
    }).firstPage();

    if (existingUsers.length > 0) {
      console.log('User already exists');
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Create new user
    console.log('Creating new user');
    const records = await base('Users').create([
      {
        fields: {
          Name: name,
          Email: contact.includes('@') ? contact : '',
          Phone: !contact.includes('@') ? contact : '',
          IsWaitlist: true
        }
      }
    ]);

    console.log('User added successfully:', records[0].id);
    return NextResponse.json({ message: 'User added to waitlist successfully', userId: records[0].id }, { status: 201 });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json({ error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}