<script>
  const { data } = $props();
  const { deck, cards } = data;
  
  let gesamtKarten = 0;
  for (let i = 0; i < cards.length; i++) {
    gesamtKarten += cards[i].count;
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
  <div class="d-flex justify-content-between align-items-center mb-4">
    <div>
      <h1 class="text-danger">{deck.name}</h1>
      <p class="text-muted">{deck.description || 'Keine Beschreibung'}</p>
      <p class="text-secondary">
        <small>
          {cards.length} verschiedene Karten • {gesamtKarten} Karten insgesamt
        </small>
      </p>
    </div>
    <div class="d-flex gap-2">
      <a href="/decks" class="btn btn-outline-light">
        <i class="bi bi-arrow-left"></i> Zurück zu Decks
      </a>
    </div>
  </div>

  <div class="row">
    <div class="col-md-8">
      <h3 class="mb-3">Karten im Deck</h3>
      
      {#if cards.length === 0}
        <div class="alert alert-secondary">
          <p class="mb-0">Keine Karten in diesem Deck oder Karten konnten nicht geladen werden.</p>
        </div>
      {:else}
        <div class="row g-3">
          {#each cards as karte}
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="card bg-dark text-light border-secondary h-100">
                {#if karte.image_url}
                  <img src={karte.image_url} alt={karte.name} class="card-img-top" style="height: 200px; object-fit: cover;" />
                {/if}
                <div class="card-body d-flex flex-column">
                  <h6 class="card-title">{karte.name}</h6>
                  <p class="card-text small text-muted">{karte.type_line}</p>
                  <div class="mt-auto">
                    <span class="badge bg-danger">{karte.count}×</span>
                    <a href="/cards/{karte._id}" class="btn btn-sm btn-outline-light ms-2">
                      <i class="bi bi-eye"></i> Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>

    <div class="col-md-4">
      <div class="card bg-dark text-light border-secondary">
        <div class="card-header">
          <h5 class="text-danger mb-0">Deck-Statistiken</h5>
        </div>
        <div class="card-body">
          <p><strong>Kartentypen:</strong> {cards.length}</p>
          <p><strong>Gesamtkarten:</strong> {gesamtKarten}</p>
          <p><strong>Erstellt:</strong> {deck.created_at ? new Date(deck.created_at).toLocaleDateString('de-DE') : 'Unbekannt'}</p>
        </div>
      </div>
    </div>
  </div>
</div>