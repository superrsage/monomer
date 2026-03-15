import { NextRequest, NextResponse } from 'next/server';
import { Firestore } from '@google-cloud/firestore';

let db: Firestore | null = null;

function getDb() {
  if (!db) {
    db = new Firestore({ projectId: process.env.GCLOUD_PROJECT ?? 'bio-plastic-490317' });
  }
  return db;
}

export async function POST(req: NextRequest) {
  const { name, email, intro } = await req.json();

  if (!name?.trim() || !email?.trim() || !intro?.trim()) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const entry = { name: name.trim(), email: email.trim(), intro: intro.trim(), submittedAt: new Date() };

  try {
    await getDb().collection('contacts').add(entry);
  } catch (err) {
    // Firestore unavailable locally — log and continue
    console.log('[contact] Firestore unavailable, logging entry:', entry);
    console.error(err);
  }

  return NextResponse.json({ ok: true });
}
