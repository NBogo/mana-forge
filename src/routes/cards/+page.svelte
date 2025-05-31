<script>
  const { data } = $props();
  const { cards } = data;
  
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

<div class="container py-5">
  <h1 class="mb-4 text-center text-light">Magic Cards</h1>

  <div class="row g-4">
    {#each cards as karte}
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100 shadow-sm bg-dark text-light card-hover">
          {#if karte.image_url}
            <img src={karte.image_url} alt={karte.name} class="card-img-top" />
          {/if}
                    <div class="card-body d-flex flex-column">
            <h5 class="card-title">{karte.name}</h5>
            <p class="card-text small mb-2">{karte.oracle_text}</p>
            <p class="card-text text-muted mb-1"><strong>Typ:</strong> {karte.type_line}</p>
            {#if karte.angriff !== undefined && karte.verteidigung !== undefined}
              <p class="card-text text-muted mb-1"><strong>Angriff/Verteidigung:</strong> {karte.angriff}/{karte.verteidigung}</p>
            {/if}
            <a href={`/cards/${karte._id}`} class="btn btn-outline-light mt-auto">Details</a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .card-hover {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 0.5rem 1rem rgba(255, 0, 0, 0.2);
    border: 1px solid #dc3545;
  }
</style>