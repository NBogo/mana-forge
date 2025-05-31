import { getAllCards, getAllDecks } from '$lib/server/db.js';

export async function load() {
  try {
    const cards = await getAllCards();
    const decks = await getAllDecks();
    
    const cardList = cards.map(card => ({
      ...card,
      _id: card._id.toString()
    }));
    
    const deckList = decks.map(deck => ({
      ...deck,
      _id: deck._id.toString()
    }));
    
    const neusteKarten = cardList.slice(-6).reverse();
    
    return {
      totalCards: cardList.length,
      totalDecks: deckList.length,
      recentCards: neusteKarten
    };
  } catch (error) {
    return {
      totalCards: 0,
      totalDecks: 0,
      recentCards: []
    };
  }
}