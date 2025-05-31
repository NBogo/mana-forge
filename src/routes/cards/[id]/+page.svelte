<script>
  const { data } = $props();
  const { card } = data;
  import Navbar from '$lib/components/Navbar.svelte';
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
  {#if !card}
    <p>Karte nicht gefunden.</p>
  {:else}
    <div class="row justify-content-center align-items-start">
      <div class="col-md-4 text-center mb-4 mb-md-0">
        {#if card.image_url}
          <img src={card.image_url} alt={card.name} class="img-fluid rounded shadow" />
        {:else}
          <div class="bg-secondary text-white p-5 rounded">Kein Bild vorhanden</div>
        {/if}
      </div>

      <div class="col-md-6">
        <h2 class="text-danger">{card.name}</h2>
        <p><strong>Typ:</strong> {card.type_line}</p>
        {#if card.mana_cost}
          <p><strong>Mana-Kosten:</strong> {card.mana_cost}</p>
        {/if}
        {#if card.colors && card.colors.length > 0}
          <p><strong>Farben:</strong> {card.colors.join(', ')}</p>
        {/if}
        {#if card.angriff !== undefined && card.verteidigung !== undefined}
          <p><strong>Angriff/Verteidigung:</strong> {card.angriff}/{card.verteidigung}</p>
        {/if}
        
        <p class="mt-3">{card.oracle_text}</p>

        <a href="/cards" class="btn btn-outline-light mt-4">
          <i class="bi bi-arrow-left"></i> Zurück zur Kartenliste
        </a>
      </div>
    </div>
  {/if}
</div>