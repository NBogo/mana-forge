<script>
const { data, form } = $props();
const { cards } = data;
let deckName = $state('');
let deckDescription = $state('');
let deckCards = $state([]);

import Navbar from '$lib/components/Navbar.svelte';

function addCard(card) {
    const existing = deckCards.find(c => c.card_id === card._id);
    if (existing) {
        existing.count += 1;
    } else {
        deckCards = [...deckCards, { card_id: card._id, name: card.name, count: 1 }];
    }
}

function removeCard(card_id) {
    deckCards = deckCards.filter(c => c.card_id !== card_id);
}

</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bold text-danger d-flex align-items-center" href="/">
      <img src="/logo.png" alt="ManaForge" height="32" class="me-2">
      ManaForge
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <div class="navbar-nav gap-2">
        <a class="btn btn-outline-light" href="/cards">
          <i class="bi bi-collection"></i> Karten
        </a>
        <a class="btn btn-outline-danger" href="/add-card">
          <i class="bi bi-plus-circle"></i> Karte hinzufügen
        </a>
        <a class="btn btn-outline-light" href="/decks">
          <i class="bi bi-stack"></i> Decks
        </a>
        <a class="btn btn-outline-danger" href="/add-deck">
          <i class="bi bi-plus-square"></i> Deck erstellen
        </a>
      </div>
    </div>
  </div>
</nav>

<div class="container py-5 text-light">
  <h2 class="text-danger mb-4">Neues Deck erstellen</h2>

  {#if form?.message}
    <div class="alert alert-success mb-4">
      <i class="bi bi-check-circle"></i> {form.message}
    </div>
  {/if}

  <form method="POST">
    <div class="mb-3">
      <label class="form-label" for="name">Deckname</label>
      <input id="name" name="name" class="form-control bg-dark text-light border-secondary" bind:value={deckName} required />
    </div>

    <div class="mb-4">
      <label class="form-label" for="description">Beschreibung</label>
      <textarea id="description" name="description" class="form-control bg-dark text-light border-secondary" rows="2" bind:value={deckDescription}></textarea>
    </div>

    <h5 class="text-light">Verfügbare Karten (anklicken zum Hinzufügen)</h5>
    <div class="row g-3 mb-4">
      {#each cards as card}
        <div class="col-6 col-md-3 col-lg-2 text-center">
          <button type="button"
                  class="card bg-dark border-secondary h-100 p-0"
                  onclick={() => addCard(card)}
                  style="cursor: pointer;">
            <img src={card.image_url} class="card-img-top" alt={card.name} />
            <div class="card-body p-2">
              <small class="card-title text-light">{card.name}</small>
            </div>
          </button>
        </div>
      {/each}
    </div>

    <h5 class="text-light mt-5">Hinzugefügte Karten</h5>
    {#if deckCards.length > 0}
      <ul class="list-group mb-4">
        {#each deckCards as entry}
          <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-light border-secondary">
            <div>
              {entry.name}
              <span class="badge bg-danger ms-2">{entry.count}×</span>
            </div>
            <button type="button" class="btn btn-sm btn-outline-light" onclick={() => removeCard(entry.card_id)}>
              <i class="bi bi-trash"></i> Entfernen
            </button>
          </li>
        {/each}
      </ul>
    {:else}
      <p class="text-muted">Noch keine Karten hinzugefügt.</p>
    {/if}

    {#each deckCards as c, i}
      <input type="hidden" name="cards[]" value={c.card_id} />
      <input type="hidden" name="counts[]" value={c.count} />
    {/each}

    <button type="submit" class="btn btn-danger">
      <i class="bi bi-save"></i> Deck speichern
    </button>
    <a href="/decks" class="btn btn-outline-light ms-2">
      <i class="bi bi-x-circle"></i> Abbrechen
    </a>
  </form>
</div>