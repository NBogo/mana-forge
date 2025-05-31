import { getAllCards } from '$lib/server/db.js';

export async function load() {
  const karten = await getAllCards();

  const kartenListe = karten.map(karte => ({
    ...karte,
    _id: karte._id.toString()
  }));
  
  return { cards: kartenListe };
}