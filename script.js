document.addEventListener("DOMContentLoaded", () => {
  const waBase = `https://wa.me/${STORE.whatsappNumber}`;
  const grid = document.getElementById("productGrid");

  PRODUCTS.forEach((p, idx) => {
    const card = document.createElement("article");
    card.className = "product-card";
    const msg = `Hi Enduచేపలు, I want ${p.name}. Please share today's price, available quantity and shipping charge.`;
    card.innerHTML = `
      <div class="product-image-wrap">
        <img src="assets/${p.slug}.jpg" alt="${p.name}" loading="lazy">
        <span class="product-number">${idx + 1}</span>
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p class="telugu">${p.telugu}</p>
        <p class="product-note">${p.note}</p>
        <div class="product-meta">${p.unit}</div>
        <a class="btn btn-small btn-whatsapp" target="_blank" rel="noopener"
           href="${waBase}?text=${encodeURIComponent(msg)}">Ask on WhatsApp</a>
      </div>`;
    grid.appendChild(card);
  });

  document.querySelectorAll("[data-wa-general]").forEach(a => {
    a.href = `${waBase}?text=${encodeURIComponent("Hi Enduచేపలు, I want to place an order. Please share today's available varieties and prices.")}`;
  });
  document.querySelectorAll("[data-catalog]").forEach(a => a.href = STORE.catalogUrl);
  document.querySelectorAll("[data-whatsapp-link]").forEach(a => { a.href = waBase; });
  document.querySelectorAll("[data-whatsapp-text]").forEach(el => { el.textContent = STORE.whatsappDisplay; });
  document.querySelectorAll("[data-call-link]").forEach(a => { a.href = `tel:${STORE.callNumber}`; });
  document.querySelectorAll("[data-call-text]").forEach(el => { el.textContent = STORE.callDisplay; });
  document.getElementById("year").textContent = new Date().getFullYear();
});
