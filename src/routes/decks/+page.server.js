import { getAllDecks } from '$lib/server/db.js';

export async function load() {
  try {
    const decks = await getAllDecks();
    
    const deckListe = decks.map(deck => ({
      ...deck,
      _id: deck._id.toString()
    }));

    return { decks: deckListe };
  } catch (error) {
    return { decks: [] };
  }
}