import { fail, redirect } from '@sveltejs/kit';
import { connectToDatabase, getAllCards } from '$lib/server/db.js';

export async function load() {
  const karten = await getAllCards();
  
  const kartenListe = karten.map(karte => ({
    ...karte,
    _id: karte._id.toString()
  }));
  
  return { cards: kartenListe };
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const description = formData.get('description');
    const cards = formData.getAll('cards[]');
    const counts = formData.getAll('counts[]');

    if (!name) {
      return fail(400, { message: 'Deckname ist erforderlich' });
    }

    const deckKarten = cards.map((card_id, i) => ({
      card_id,
      count: parseInt(counts[i])
    }));

    try {
      const db = await connectToDatabase();
      await db.collection('decks').insertOne({
        name,
        description,
        cards: deckKarten,
        created_at: new Date()
      });
      
      return { message: 'Deck erfolgreich erstellt!' };
      
    } catch (error) {
      return fail(500, { message: 'Fehler beim Speichern' });
    }
  }
};