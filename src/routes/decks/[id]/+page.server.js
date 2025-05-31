import { connectToDatabase } from '$lib/server/db.js';
import { ObjectId } from 'mongodb';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const db = await connectToDatabase();
    
    const deck = await db.collection('decks').findOne({ 
      _id: new ObjectId(params.id) 
    });
    
    if (!deck) {
      throw error(404, 'Deck nicht gefunden');
    }

    let karten = [];
    
    if (deck.cards) {
      for (const deckCard of deck.cards) {
        if (deckCard.card_id && deckCard.card_id.length === 24) {
          const card = await db.collection('cards').findOne({ 
            _id: new ObjectId(deckCard.card_id)
          });
          
          if (card) {
            karten.push({
              ...card,
              _id: card._id.toString(),
              count: deckCard.count
            });
          }
        }
      }
    }

    return {
      deck: {
        ...deck,
        _id: deck._id.toString()
      },
      cards: karten
    };
  } catch (err) {
    throw error(500, 'Fehler beim Laden');
  }
}