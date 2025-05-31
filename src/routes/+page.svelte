<script>
  const { data } = $props();
  const { totalCards, totalDecks, recentCards } = data;
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
  <div class="text-center mb-5">
    <h1 class="display-3 fw-bold mb-3">
      Willkommen bei <span class="text-danger">ManaForge</span>
    </h1>
    <p class="lead text-secondary mb-5">
      Deine persönliche Magic-Datenbank – verwalte Karten, erstelle Decks und finde dein nächstes Lieblingsspiel.
    </p>
  </div>

  <div class="row text-center mb-5">
    <div class="col-md-4 mb-3">
      <div class="card bg-dark border-secondary h-100">
        <div class="card-body">
          <h2 class="text-danger display-4">{totalCards}</h2>
          <p class="text-light mb-0">Karten in der Sammlung</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="card bg-dark border-secondary h-100">
        <div class="card-body">
          <h2 class="text-danger display-4">{totalDecks}</h2>
          <p class="text-light mb-0">Erstellte Decks</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="card bg-dark border-secondary h-100">
        <div class="card-body">
          <h2 class="text-danger display-4">{recentCards.length}</h2>
          <p class="text-light mb-0">Neueste Karten</p>
        </div>
      </div>
    </div>
  </div>

  {#if recentCards.length > 0}
    <div class="text-center">
      <h3 class="text-light mb-4">Zuletzt hinzugefügte Karten</h3>
      <div class="row justify-content-center g-4">
        {#each recentCards.slice(0, 6) as karte}
          <div class="col-12 col-sm-6 col-md-4 col-lg-2">
            <div class="card bg-dark border-secondary h-100 card-hover">
              {#if karte.image_url}
                <img src={karte.image_url} class="card-img-top" alt={karte.name} style="height: 200px; object-fit: cover;" />
              {/if}
              <div class="card-body p-2">
                <h6 class="card-title text-light mb-1">{karte.name}</h6>
                <p class="card-text text-muted small">{karte.type_line}</p>
                <a href="/cards/{karte._id}" class="btn btn-sm btn-outline-danger">Details</a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .card-hover {
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 0.5rem 1rem rgba(220, 53, 69, 0.3);
    border-color: #dc3545 !important;
  }
</style>