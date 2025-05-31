<script>
  const { data } = $props();
  const { decks } = data;
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bold text-danger d-flex align-items-center" href="/">
      <img src="/logo.png" alt="ManaForge" height="32" class="me-2">
      ManaForge
    </a>
    <div class="collapse navbar-collapse justify-content-end">
      <div class="navbar-nav gap-2">
        <a class="btn btn-outline-light" href="/cards">
          <i class="bi bi-collection"></i> Karten
        </a>
        <a class="btn btn-outline-danger" href="/add-card">
          <i class="bi bi-plus-circle"></i> Karte hinzufügen
        </a>
        <a class="btn btn-light" href="/decks">
          <i class="bi bi-stack"></i> Decks
        </a>
        <a class="btn btn-outline-danger" href="/add-deck">
          <i class="bi bi-plus-square"></i> Deck erstellen
        </a>
      </div>
    </div>
  </div>
</nav>

<div class="container py-5">
  <h1 class="mb-4 text-center text-light">Meine Decks</h1>

  {#if decks.length === 0}
    <div class="text-center text-light">
      <p>Noch keine Decks erstellt.</p>
      <a href="/add-deck" class="btn btn-danger">
        <i class="bi bi-plus-square"></i> Erstes Deck erstellen
      </a>
    </div>
  {:else}
    <div class="row g-4">
      {#each decks as deck}
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card h-100 bg-dark text-light border-secondary">
            <div class="card-body">
              <h5 class="card-title text-danger">{deck.name}</h5>
              <p class="card-text">{deck.description || 'Keine Beschreibung'}</p>
              <p class="text-muted">
                <small>{deck.cards?.length || 0} Kartentypen</small>
              </p>
              <a href="/decks/{deck._id}" class="btn btn-outline-light">
                <i class="bi bi-eye"></i> Details anzeigen
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>