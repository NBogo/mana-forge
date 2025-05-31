import { connectToDatabase } from '$lib/server/db.js';
import { ObjectId } from 'mongodb';

export async function load({ params }) {
  const db = await connectToDatabase();

  const karte = await db.collection('cards').findOne({ _id: new ObjectId(params.id) });

  if (!karte) {
    return { card: null };
  }

  return {
    card: {
      ...karte,
      _id: karte._id.toString()
    }
  };
}