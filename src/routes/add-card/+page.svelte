<script>
  const { form } = $props();
  
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bold text-danger d-flex align-items-center" href="/">
      <img src="/logo.png" alt="ManaForge" height="32" class="me-2">
      ManaForge
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <div class="navbar-nav gap-2">
        <a class="btn btn-outline-light" href="/cards">
          <i class="bi bi-collection"></i> Karten
        </a>
        
        <a class="btn btn-danger" href="/add-card">
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
  <h2 class="text-danger mb-4">Neue Karte hinzufügen</h2>

  {#if form?.message}
    <div class="alert alert-success mb-4">
      <i class="bi bi-check-circle"></i> {form.message}
    </div>
  {/if}

  <form method="POST" class="row g-3">
    <div class="col-md-6">
      <label class="form-label">Name</label>
      <input class="form-control bg-dark text-light border-secondary" name="name" required />
    </div>
    <div class="col-md-6">
      <label class="form-label">Mana-Kosten</label>
      <input class="form-control bg-dark text-light border-secondary" name="mana_cost" />
    </div>
    <div class="col-12">
      <label class="form-label">Typ</label>
      <input class="form-control bg-dark text-light border-secondary" name="type_line" />
    </div>
    <div class="col-12">
      <label class="form-label">Beschreibung</label>
      <textarea class="form-control bg-dark text-light border-secondary" name="oracle_text" rows="3"></textarea>
    </div>
    <div class="col-12">
      <label class="form-label">Farben (Kommagetrennt)</label>
      <input class="form-control bg-dark text-light border-secondary" name="colors" />
    </div>
    <div class="col-12">
      <label class="form-label">Bild-URL</label>
      <input class="form-control bg-dark text-light border-secondary" name="image_url" />
    </div>
    <div class="col-md-3">
      <label class="form-label">Angriff</label>
      <input class="form-control bg-dark text-light border-secondary" name="angriff" type="number" min="0" />
    </div>
    <div class="col-md-3">
      <label class="form-label">Verteidigung</label>
      <input class="form-control bg-dark text-light border-secondary" name="verteidigung" type="number" min="0" />
    </div>
    <div class="col-12">
      <button class="btn btn-danger" type="submit">
        <i class="bi bi-save"></i> Karte speichern
      </button>
      <a href="/cards" class="btn btn-outline-light ms-2">
        <i class="bi bi-x-circle"></i> Abbrechen
      </a>
    </div>
  </form>
</div>