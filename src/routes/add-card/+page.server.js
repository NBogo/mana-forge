import { fail, redirect } from '@sveltejs/kit';
import { connectToDatabase } from '$lib/server/db.js';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const mana_cost = formData.get('mana_cost');
    const type_line = formData.get('type_line');
    const oracle_text = formData.get('oracle_text');
    const colors = formData.get('colors');
    const image_url = formData.get('image_url');
    const angriff = formData.get('angriff');
    const verteidigung = formData.get('verteidigung');

    if (!name) {
      return fail(400, { message: 'Kartenname ist erforderlich' });
    }

    try {
      const db = await connectToDatabase();
      
      // Farben von String zu Array umwandeln
      let colorsArray = [];
      if (colors) {
        colorsArray = colors.split(',');
      }

      // Angriff und Verteidigung zu Zahlen machen
      let angriffsZahl = null;
      let verteidigungsZahl = null;
      
      if (angriff) {
        angriffsZahl = parseInt(angriff);
      }
      
      if (verteidigung) {
        verteidigungsZahl = parseInt(verteidigung);
      }

      await db.collection('cards').insertOne({
        name: name,
        mana_cost: mana_cost || '',
        type_line: type_line || '',
        oracle_text: oracle_text || '',
        colors: colorsArray,
        image_url: image_url || '',
        angriff: angriffsZahl,
        verteidigung: verteidigungsZahl,
        created_at: new Date()
      });
      
      // Erfolg-Message anzeigen statt redirect
      return { message: 'Karte erfolgreich gespeichert!' };
      
    } catch (error) {
      return fail(500, { message: 'Fehler beim Speichern' });
    }
  }
};