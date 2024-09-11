import { NextResponse } from 'next/server';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN }).base(process.env.AIRTABLE_BASE_ID!);

export async function POST(request: Request) {
  try {
    const { name, contact } = await request.json();

    // Validate input
    if (!name || !contact) {
      return NextResponse.json({ error: 'Name and contact are required' }, { status: 400 });
    }

    // Check if user already exists
    const existingRecords = await base('Users').select({
      filterByFormula: `OR({Email} = '${contact}', {Phone} = '${contact}')`
    }).firstPage();

    if (existingRecords.length > 0) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Create new user
    const newRecord = await base('Users').create([
      {
        fields: {
          Name: name,
          Email: contact.includes('@') ? contact : '',
          Phone: !contact.includes('@') ? contact : '',
          IsWaitlist: true
        }
      }
    ]);

    return NextResponse.json({ message: 'Successfully joined waitlist', id: newRecord[0].id }, { status: 201 });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}