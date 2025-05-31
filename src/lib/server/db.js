import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;
const client = new MongoClient(uri);
let db;

export async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db(dbName);
  }
  return db;
}

export async function getAllCards() {
  const db = await connectToDatabase();
  return db.collection('cards').find().toArray();
}

export async function getAllDecks() {
  const db = await connectToDatabase();
  return db.collection("decks").find().toArray();
}